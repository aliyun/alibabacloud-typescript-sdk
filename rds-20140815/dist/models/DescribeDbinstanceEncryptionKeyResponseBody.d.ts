import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList extends $dara.Model {
    /**
     * @remarks
     * The alias of the key.
     *
     * @example
     * alias/****
     */
    aliasName?: string;
    /**
     * @remarks
     * The creator of the key.
     *
     * @example
     * 1443****9604
     */
    creator?: string;
    /**
     * @remarks
     * The estimated time when the key is deleted. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
     *
     * @example
     * 2022-05-08T08:14:16Z
     */
    deleteDate?: string;
    /**
     * @remarks
     * The description of the key.
     *
     * @example
     * Description of the key
     */
    description?: string;
    /**
     * @remarks
     * The key ID.
     *
     * @example
     * 5306d1b6-7fd3-42d9-9511-****
     */
    encryptionKey?: string;
    /**
     * @remarks
     * The status of the key. Valid values:
     * - **Enabled**: The key is enabled.
     * - **Disabled**: The key is disabled.
     *
     * @example
     * Enabled
     */
    encryptionKeyStatus?: string;
    /**
     * @remarks
     * The type of the key. Valid values:
     * - CMK: customer master key
     * - ServiceKey: service key
     *
     * @example
     * ServiceKey
     */
    keyType?: string;
    /**
     * @remarks
     * The usage of the key.
     *
     * @example
     * ENCRYPT/DECRYPT
     */
    keyUsage?: string;
    /**
     * @remarks
     * The expiration time of the key material. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
     *
     * @example
     * 2021-10-18T08:14:16Z
     */
    materialExpireTime?: string;
    /**
     * @remarks
     * The source of the key.
     *
     * @example
     * Aliyun_KMS
     */
    origin?: string;
    /**
     * @remarks
     * The usage of the key:
     *
     * - **TDE**: transparent data encryption.
     * - **DiskEncryption**: cloud disk encryption.
     *
     * @example
     * TDE
     */
    usedBy?: string;
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
export declare class DescribeDBInstanceEncryptionKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The creator of the key.
     *
     * @example
     * 1443****9604
     */
    creator?: string;
    /**
     * @remarks
     * The estimated time when the key is deleted. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
     *
     * @example
     * 2022-05-08T08:14:16Z
     */
    deleteDate?: string;
    /**
     * @remarks
     * The description of the key.
     *
     * @example
     * Description of the key
     */
    description?: string;
    /**
     * @remarks
     * The key ID.
     *
     * @example
     * 5306d1b6-7fd3-42d9-9511-****
     */
    encryptionKey?: string;
    /**
     * @remarks
     * The list of keys.
     */
    encryptionKeyList?: DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList[];
    /**
     * @remarks
     * The status of the key. Valid values:
     * - **Enabled**: The key is enabled.
     * - **Disabled**: The key is disabled.
     *
     * @example
     * Enabled
     */
    encryptionKeyStatus?: string;
    /**
     * @remarks
     * The usage of the key.
     *
     * @example
     * ENCRYPT/DECRYPT
     */
    keyUsage?: string;
    /**
     * @remarks
     * The expiration time of the key material. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
     *
     * @example
     * 2021-10-18T08:14:16Z
     */
    materialExpireTime?: string;
    /**
     * @remarks
     * The source of the key.
     *
     * @example
     * Aliyun_KMS
     */
    origin?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3BC2768E-DEDA-40FC-BBE9-6B884F3626AF
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
