import * as $dara from '@darabonba/typescript';
export declare class DescribeGlobalSecurityIPGroupRelationRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID of the IP whitelist template.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-**********
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
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
