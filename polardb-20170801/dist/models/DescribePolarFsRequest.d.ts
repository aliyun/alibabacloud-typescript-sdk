import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * testKey
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * @example
     * testValue
     */
    value?: string;
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
export declare class DescribePolarFsRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarDB instance ID on which the application depends.
     *
     * @example
     * pc-2ze8u21s03******
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The page number. The value must be an integer greater than 0 and no greater than the maximum value of the Integer data type.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The description of the PolarFS instance.
     *
     * @example
     * pfs-ins1********
     */
    polarFsInstanceDescription?: string;
    /**
     * @remarks
     * The PolarFS instance IDs. Separate multiple instance IDs with commas (,).
     *
     * @example
     * pfs-ins1*******
     */
    polarFsInstanceIds?: string;
    /**
     * @remarks
     * The PolarFS type.
     *
     * @example
     * all
     */
    polarFsType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the associated PolarDB cluster.
     *
     * @example
     * pc-2zejpr41d9xk*****
     */
    relativeDbClusterId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-xxx
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The tags.
     */
    tag?: DescribePolarFsRequestTag[];
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
