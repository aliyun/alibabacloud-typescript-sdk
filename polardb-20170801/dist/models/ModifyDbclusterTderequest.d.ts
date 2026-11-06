import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterTDERequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to allow the TDE key of the instance to automatically rotate at the nearest maintenance window after the rotation period when a KMS key version change is detected. This parameter is supported only for custom keys. Valid values:
     * - **true**: Allows automatic rotation.
     * - **false**: Does not allow automatic rotation.
     *
     * > This parameter is supported only when the database engine is PostgreSQL-compatible or Oracle-compatible.
     *
     * @example
     * false
     */
    enableAutomaticRotation?: string;
    /**
     * @remarks
     * Specifies whether to automatically encrypt all newly created tables. Valid values:
     *
     * - **ON**: Enables automatic encryption.
     *
     * - **OFF**: Disables automatic encryption.
     *
     * > This parameter takes effect only when the database engine is MySQL-compatible.
     *
     * @example
     * ON
     */
    encryptNewTables?: string;
    /**
     * @remarks
     * The ID of the custom key.
     *
     * @example
     * 749c1df7-****-****-****-*********
     */
    encryptionKey?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The global resource descriptor of the role, used to specify a specific role. For details, see [RAM role overview](https://help.aliyun.com/document_detail/93689.html).
     *
     * @example
     * acs:ram::1406926*****:role/aliyunrdsinstanceencryptiondefaultrole
     */
    roleArn?: string;
    /**
     * @remarks
     * The TDE status. Set the value to **Enable**.
     *
     * This parameter is required.
     *
     * @example
     * Enable
     */
    TDEStatus?: string;
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
