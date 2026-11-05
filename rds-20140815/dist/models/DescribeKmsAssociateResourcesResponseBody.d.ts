import * as $dara from '@darabonba/typescript';
export declare class DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * pgm-bp16p6f68130****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The database engine. Valid values:
     *
     * - **MySQL**
     * - **SQLServer**
     * - **PostgreSQL**
     *
     * @example
     * PostgreSQL
     */
    engine?: string;
    /**
     * @remarks
     * The usage of the key. Valid values:
     *
     * - **DiskEncryption**: cloud disk encryption.
     * - **TDE**: transparent data encryption.
     *
     * @example
     * DiskEncryption
     */
    keyUsedBy?: string;
    /**
     * @remarks
     * The instance status. Valid values:
     *
     * - **CREATING**: The instance is being created.
     * - **ACTIVATION**: The instance is running.
     * - **DELETING**: The instance is being deleted.
     * - **RESTARTING**: The instance is being restarted.
     * - **CLASS_CHANGING**: The instance is undergoing a specification change.
     * - **INS_MAINTAINING**: The instance is undergoing maintenance.
     * - **BACKUP_RECOVERING**: The instance is being restored from a backup.
     * - **NET_MODIFYING**: The network configuration of the instance is being changed.
     *
     * @example
     * ACTIVATION
     */
    status?: string;
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
export declare class DescribeKmsAssociateResourcesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of associated ApsaraDB RDS instances.
     */
    associateDBInstances?: DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances[];
    /**
     * @remarks
     * Indicates whether associated ApsaraDB RDS instances exist.
     *
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * true
     */
    associateStatus?: boolean;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 38F6B598-A6D7-508A-8401-12BB9936****
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
