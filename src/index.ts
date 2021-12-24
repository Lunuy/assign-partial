type CommonKey<A, B> = (keyof A & keyof B);

type AssignAnd<Target, Source, Key extends CommonKey<Target, Source> = CommonKey<Target, Source>> = {
    [K in Key as (Source[K] extends Target[K] ? K : never)]: Target[K]
};
type AssignableKey<Target, Source> = keyof AssignAnd<Target, Source>;

export function assignPartial<Target, Source>(target: Target, source: Source, keys: AssignableKey<Target, Source>[]) {
    for(const key of keys) {
        (target as any)[key] = (source as any)[key];
    }

    return target;
}