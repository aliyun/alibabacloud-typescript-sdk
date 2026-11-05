import * as $dara from '@darabonba/typescript';
export declare class DetachGadInstanceMemberRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the global active database cluster.
     *
     * This parameter is required.
     *
     * @example
     * gad-rm-bp1npi2j8****
     */
    gadInstanceName?: string;
    /**
     * @remarks
     * The ID of the ApsaraDB RDS instance that corresponds to the unit node you want to remove. You can call DescribeGadInstances to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1npi2j8****
     */
    memberInstanceName?: string;
    /**
     * @remarks
     * The region ID of the central node in the cluster. You can call DescribeGadInstances to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. You can call DescribeDBInstanceAttribute to query the resource group ID.
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
