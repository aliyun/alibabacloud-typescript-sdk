import * as $dara from '@darabonba/typescript';
export declare class DescribeZonesResponseBodyZones extends $dara.Model {
    /**
     * @remarks
     * The enumeration values for various availability states. Valid values:
     *
     * - **UnSet**: not available
     * - **SoldOut**: sold out
     * - **WithStock**: in stock
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
     * The zone status. Valid values:
     * - **ON**: available
     * - **OFF**: unavailable
     *
     * @example
     * ON
     */
    status?: string;
    /**
     * @remarks
     * The zone ID.
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
     * The list of zones.
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
