import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes extends $dara.Model {
    /**
     * @remarks
     * The instance storage type.
     *
     * @example
     * local_ssd
     */
    storageType?: string;
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
export declare class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys extends $dara.Model {
    /**
     * @remarks
     * The instance edition.
     *
     * @example
     * HighAvailability
     */
    category?: string;
    /**
     * @remarks
     * The list of available storage types.
     */
    supportedStorageTypes?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes[];
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
export declare class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions extends $dara.Model {
    /**
     * @remarks
     * The list of available instance editions.
     */
    supportedCategorys?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys[];
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 8.0
     */
    version?: string;
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
export declare class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
    /**
     * @remarks
     * The database engine.
     *
     * @example
     * MySQL
     */
    engine?: string;
    /**
     * @remarks
     * The list of available database engine versions.
     */
    supportedEngineVersions?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions[];
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
export declare class DescribeAvailableZonesResponseBodyAvailableZones extends $dara.Model {
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The list of available database engines.
     */
    supportedEngines?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines[];
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-hangzhou-e
     */
    zoneId?: string;
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
export declare class DescribeAvailableZonesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of available zone resources for ApsaraDB RDS.
     */
    availableZones?: DescribeAvailableZonesResponseBodyAvailableZones[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4256E149-C3C4-4FA7-BDEA-13CA415E8763
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
