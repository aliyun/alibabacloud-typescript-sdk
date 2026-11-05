import * as $dara from '@darabonba/typescript';
export declare class DeleteExtensionsRequest extends $dara.Model {
    /**
     * @remarks
     * A client-generated token to ensure that the request is idempotent. The token must be unique for each request. It is case-sensitive and can contain a maximum of 64 ASCII characters.
     *
     * @example
     * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
     */
    clientToken?: string;
    /**
     * @remarks
     * The ID of the cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * This parameter is required.
     *
     * @example
     * auto_test_db
     */
    DBNames?: string;
    /**
     * @remarks
     * The extensions to uninstall. Separate multiple extension names with a comma (,).
     *
     * This parameter is required.
     *
     * @example
     * pase,hstore
     */
    extensions?: string;
    /**
     * @example
     * test@example.com
     */
    ownerAccount?: string;
    /**
     * @example
     * 1234567890123456
     */
    ownerId?: number;
    /**
     * @remarks
     * The ID of the region.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    /**
     * @example
     * test@example.com
     */
    resourceOwnerAccount?: string;
    /**
     * @example
     * 1234567890123456
     */
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC) where the endpoint is located.
     *
     * @example
     * vpc-25cdvfeq58pl****
     */
    vpcId?: string;
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
