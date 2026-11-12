import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBTenantApiKeysRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID. Both pagc- and pc- prefixes are supported. The pagc- prefix indicates an AgenticDB dedicated cluster. The pc- prefix indicates a standard PolarDB cluster that supports AgenticDB tenant capabilities.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries to return on each page. Default value: 30. Maximum value: 100.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * Filters the results by tenant name.
     *
     * @example
     * my-saas-app
     */
    tenantName?: string;
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
