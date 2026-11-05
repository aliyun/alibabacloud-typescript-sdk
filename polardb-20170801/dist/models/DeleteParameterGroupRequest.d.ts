import * as $dara from '@darabonba/typescript';
export declare class DeleteParameterGroupRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The parameter template ID.
     *
     * > You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to view parameter template IDs.
     *
     * This parameter is required.
     *
     * @example
     * pcpg-**************
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view available regions.
     *
     * This parameter is required.
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
     * rg-************
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
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
