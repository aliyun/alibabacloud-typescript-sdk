import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceConnectivityRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-t4ns09hgoy99i5gez
     */
    dbInstanceName?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The source IP address of the user.
     *
     * This parameter is required.
     *
     * @example
     * 172.16.XX.XX
     */
    sourceIpAddress?: string;
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
