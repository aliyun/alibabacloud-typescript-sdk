import * as $dara from '@darabonba/typescript';
export declare class DescribeHostGroupElasticStrategyParametersRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the dedicated cluster.
     *
     * This parameter is required.
     *
     * @example
     * dhg-d0dwi82293b2w9t5
     */
    dedicatedHostGroupName?: string;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-shanghai
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerId?: number;
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
