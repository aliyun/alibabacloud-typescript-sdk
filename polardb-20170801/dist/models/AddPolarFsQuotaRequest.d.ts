import * as $dara from '@darabonba/typescript';
export declare class AddPolarFsQuotaRequestQuotas extends $dara.Model {
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
     * The description of the resource quota.
     *
     * @example
     * quota_policy
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether the rule is enabled. Valid values:
     * - **True**: New events take effect immediately for new resources. This is the default value.
     * - **False**: New events do not take effect for new resources.
     *
     * @example
     * True
     */
    enabled?: boolean;
    /**
     * @remarks
     * The matching rule used to exclude specific paths.
     * - A path pattern that starts with `/`. Glob syntax such as `*`, `?`, and `**` is supported.
     *
     * @example
     * /a/*project*
     */
    exclude?: string;
    /**
     * @remarks
     * The maximum number of files allowed in the directory.
     *
     * @example
     * 222
     */
    fileCountLimit?: number;
    /**
     * @remarks
     * The wildcard pattern used to match paths.
     * - A path pattern that starts with `/`. Glob syntax such as `*`, `?`, and `**` is supported.
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
     * The maximum total capacity of files in the directory. Unit: GB.
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
     * The PolarDB instance ID that the application depends on.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The Polarlakebase instance ID.
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
