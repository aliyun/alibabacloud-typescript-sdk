import * as $dara from '@darabonba/typescript';
export declare class DescribeZonesResponseBodyZones extends $dara.Model {
    /**
     * @remarks
     * The enumeration of statuses. Valid values:
     *
     * - **UnSet**: The zone is not open for use.
     *
     * - **SoldOut**: The resources in the zone are sold out.
     *
     * - **WithStock**: The zone has available resources.
     *
     * @example
     * UnSet
     */
    modeCode?: string;
    /**
     * @remarks
     * The priority.
     *
     * @example
     * 50
     */
    priority?: string;
    /**
     * @remarks
     * The status of the zone. Valid values:
     *
     * - **ON**: The zone is available.
     *
     * - **OFF**: The zone is unavailable.
     *
     * @example
     * ON
     */
    status?: string;
    /**
     * @remarks
     * The ID of the zone.
     *
     * @example
     * cn-beijing-h
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
export declare class DescribeZonesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E2FDB684-751D-424D-98B9-704BEA******
     */
    requestId?: string;
    /**
     * @remarks
     * A list of zones.
     */
    zones?: DescribeZonesResponseBodyZones[];
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
