import * as $dara from '@darabonba/typescript';
export declare class DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone extends $dara.Model {
    description?: string;
    standardTimeOffset?: string;
    timeZone?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeCollationTimeZonesResponseBodyCollationTimeZones extends $dara.Model {
    collationTimeZone?: DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeCollationTimeZonesResponseBody extends $dara.Model {
    collationTimeZones?: DescribeCollationTimeZonesResponseBodyCollationTimeZones;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4EAED246-DB18-4C8D-9EB5-C319626F2A77
     */
    requestId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
