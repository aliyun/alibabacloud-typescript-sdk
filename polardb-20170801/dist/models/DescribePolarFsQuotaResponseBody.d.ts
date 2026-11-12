import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsQuotaResponseBodyPolicyItems extends $dara.Model {
    /**
     * @remarks
     * The time-to-live (TTL) for the access time. Unit: seconds.
     *
     * @example
     * 7200
     */
    accessTTL?: number;
    /**
     * @remarks
     * The time-to-live (TTL) for the change time. Unit: seconds.
     *
     * @example
     * 7200
     */
    changeTTL?: number;
    /**
     * @remarks
     * The rule description.
     *
     * @example
     * NULL
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether the rule is enabled. Valid values:
     * - **true**: New events take effect immediately on new transactions. This is the default value.
     * - **false**: New events do not take effect on new transactions.
     *
     * @example
     * false
     */
    enabled?: boolean;
    /**
     * @remarks
     * The matching rule for excluding specific paths.
     * - Path patterns starting with `/` (supports glob syntax such as `*`, `?`, and `**`).
     *
     * @example
     * NULL
     */
    exclude?: string;
    /**
     * @remarks
     * The limit on the number of files for users in the directory.
     *
     * @example
     * 77
     */
    fileCountLimit?: number;
    /**
     * @remarks
     * The rule ID.
     *
     * @example
     * 73
     */
    id?: number;
    /**
     * @remarks
     * The wildcard pattern for matching paths.
     * - Path patterns starting with `/` (supports glob syntax such as `*`, `?`, and `**`).
     *
     * @example
     * /a*
     */
    include?: string;
    /**
     * @remarks
     * The rule name.
     *
     * @example
     * File system quota rule
     */
    name?: string;
    /**
     * @remarks
     * The priority of the quota rule.
     *
     * @example
     * 1
     */
    priority?: number;
    /**
     * @remarks
     * The total capacity limit for files in the directory. Unit: GB.
     * - Note: The value must be at least 1 GB.
     *
     * @example
     * 1
     */
    sizeLimit?: number;
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
export declare class DescribePolarFsQuotaResponseBodyQuotaItems extends $dara.Model {
    /**
     * @remarks
     * The capacity. Unit: bytes.
     *
     * @example
     * 1073741824
     */
    capacity?: number;
    /**
     * @remarks
     * The inode quota of the file system.
     *
     * @example
     * 100
     */
    inodes?: number;
    /**
     * @remarks
     * The directory path.
     *
     * @example
     * /data
     */
    path?: string;
    /**
     * @remarks
     * The used capacity. Unit: bytes.
     *
     * @example
     * 104857600
     */
    usedCapacity?: number;
    /**
     * @remarks
     * The number of used inodes.
     *
     * @example
     * 1
     */
    usedInodes?: number;
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
export declare class DescribePolarFsQuotaResponseBody extends $dara.Model {
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 5
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The number of entries per page. Valid values: 5 to 50. Default value: 10.
     *
     * @example
     * 10
     */
    pageSize?: string;
    /**
     * @remarks
     * The directory path.
     *
     * @example
     * /data
     */
    path?: string;
    /**
     * @remarks
     * The Polarlakebase instance ID.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The rule details.
     */
    policyItems?: DescribePolarFsQuotaResponseBodyPolicyItems[];
    /**
     * @remarks
     * The quota information.
     */
    quotaItems?: DescribePolarFsQuotaResponseBodyQuotaItems[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2FED790E-FB61-4721-8C1C-07C627******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 5
     */
    totalRecordCount?: string;
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
