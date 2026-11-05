import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources extends $dara.Model {
    /**
     * @remarks
     * The edition of the cluster. Valid values:
     *
     * - **Normal**: Cluster Edition.
     *
     * - **Basic**: Single Node Edition.
     *
     * - **ArchiveNormal**: X-Engine.
     *
     * - **NormalMultimaster**: Multi-master Cluster (Database/Table) Edition.
     *
     * - **SENormal**: Standard Edition.
     *
     * > * Only PolarDB for MySQL supports Single Node Edition.
     * >
     * > * Only PolarDB for MySQL 8.0 supports X-Engine Edition and Multi-master Cluster (Database/Table) Edition.
     *
     * @example
     * Normal
     */
    category?: string;
    /**
     * @remarks
     * The specifications of the node.
     *
     * @example
     * polar.mysql.x4.large
     */
    DBNodeClass?: string;
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
export declare class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
    /**
     * @remarks
     * The available resources.
     */
    availableResources?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources[];
    /**
     * @remarks
     * The version of the database engine.
     *
     * @example
     * mysql57
     */
    engine?: string;
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
export declare class DescribeDBClusterAvailableResourcesResponseBodyAvailableZones extends $dara.Model {
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
     * The list of available engines.
     */
    supportedEngines?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines[];
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-hangzhou-i
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
export declare class DescribeDBClusterAvailableResourcesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of available resources.
     */
    availableZones?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZones[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2B19F698-8FFC-4918-B9E2-58D878******
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
