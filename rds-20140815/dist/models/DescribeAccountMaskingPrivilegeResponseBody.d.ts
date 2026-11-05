import * as $dara from '@darabonba/typescript';
export declare class DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege extends $dara.Model {
    /**
     * @remarks
     * The expiration time of the permission, in UTC format.
     *
     * @example
     * 2026-01-22T02:01:20Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The permission type. A value of restrictedAccess indicates restricted access, which requires data masking.
     *
     * @example
     * restrictedAccess
     */
    privilege?: string;
    /**
     * @remarks
     * The account name.
     *
     * @example
     * rds
     */
    userName?: string;
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
export declare class DescribeAccountMaskingPrivilegeResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of user encryption or masking permissions.
     */
    userPrivilege?: DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege[];
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
export declare class DescribeAccountMaskingPrivilegeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: DescribeAccountMaskingPrivilegeResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D0073A98-52F1-3075-8256-394**********
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
