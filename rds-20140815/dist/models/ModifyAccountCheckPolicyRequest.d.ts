import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountCheckPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the account.
     *
     * This parameter is required.
     *
     * @example
     * DatabaseTest
     */
    accountName?: string;
    /**
     * @remarks
     * Specifies whether to apply the password policy. Valid values:
     *
     * - **true**: applies the password policy to the account.
     * - **false**: cancels the password policy applied to the account.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    checkPolicy?: boolean;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can only contain ASCII characters.
     *
     * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
     *
     * @example
     * ETnLKlblzczshOTUbOC****
     */
    clientToken?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5xxxxxxxxxx
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-acfmy****
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
