import * as $dara from '@darabonba/typescript';
export declare class AddPolarFsQuotaRequestQuotas extends $dara.Model {
    /**
     * @remarks
     * The time to live (TTL) for the access time. Unit: seconds.
     *
     * @example
     * 7200
     */
    accessTTL?: number;
    /**
     * @remarks
     * The TTL for the change time. Unit: seconds.
     *
     * @example
     * 7200
     */
    changeTTL?: number;
    /**
     * @remarks
     * The description of the resource quota.
     *
     * @example
     * quota_policy
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether to enable the rule. Valid values:
     *
     * - **True**: The rule immediately applies to new items. This is the default value.
     *
     * - **False**: The rule does not apply to new items.
     *
     * @example
     * True
     */
    enabled?: boolean;
    /**
     * @remarks
     * The rule to exclude specific paths from matching.
     *
     * - A path pattern that starts with a forward slash (/). Supports glob syntax, including `*`, `?`, and `**`.
     *
     * @example
     * /a/*project*
     */
    exclude?: string;
    /**
     * @remarks
     * The limit on the number of files for a user in the directory.
     *
     * @example
     * 222
     */
    fileCountLimit?: number;
    /**
     * @remarks
     * The wildcard pattern to match paths.
     *
     * - A path pattern that starts with a forward slash (/). Supports glob syntax, including `*`, `?`, and `**`.
     *
     * This parameter is required.
     *
     * @example
     * /b/*project*
     */
    include?: string;
    /**
     * @remarks
     * The name of the rule.
     *
     * This parameter is required.
     *
     * @example
     * rule1
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
     * The total size limit for files in the directory. Unit: GB.
     *
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
export declare class AddPolarFsQuotaRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB instance on which the application depends.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the Polarlakebase instance.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The details of the quota rules.
     *
     * This parameter is required.
     */
    quotas?: AddPolarFsQuotaRequestQuotas[];
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
