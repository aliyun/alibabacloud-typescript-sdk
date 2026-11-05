import * as $dara from '@darabonba/typescript';
export declare class AddEncryptionDBRolePrivilegeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters in a destination region, including cluster IDs.
     *
     * @example
     * pc-bp10gr51qasnl****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
     */
    requestId?: string;
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
