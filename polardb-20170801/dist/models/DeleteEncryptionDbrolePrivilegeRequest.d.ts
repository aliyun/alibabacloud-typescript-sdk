import * as $dara from '@darabonba/typescript';
export declare class DeleteEncryptionDBRolePrivilegeRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account, such as the cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The name of the role permission.
     *
     * @example
     * test
     */
    rolePrivilegeNameList?: string;
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
