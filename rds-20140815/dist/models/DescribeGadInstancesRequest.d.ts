import * as $dara from '@darabonba/typescript';
export declare class DescribeGadInstancesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the GAD cluster.
     * * If you do not specify this parameter, the IDs of all GAD clusters under the current account are returned.
     * * If you specify this parameter, the details of the specified cluster are returned.
     *
     * > You can leave this parameter empty in the first call to obtain the IDs of all GAD clusters under the current account, and then specify a cluster ID to view the details of the cluster.
     *
     * @example
     * gad-rm-bp1npi2j8****
     */
    gadInstanceName?: string;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
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
