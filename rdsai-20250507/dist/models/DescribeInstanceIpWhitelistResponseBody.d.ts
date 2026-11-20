import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups extends $dara.Model {
    /**
     * @remarks
     * The name of the IP address whitelist group.
     *
     * @example
     * default
     */
    groupName?: string;
    /**
     * @remarks
     * The list of addresses in the IP address whitelist.
     *
     * @example
     * 192.0.2.0/24
     */
    ipWhitelist?: string;
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
export declare class DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups extends $dara.Model {
    /**
     * @remarks
     * The name of the group.
     *
     * @example
     * default
     */
    groupName?: string;
    /**
     * @remarks
     * The list of IP addresses.
     *
     * @example
     * 192.168.XXX.XXX/24,10.0.XXX.XXX/24
     */
    ipWhitelist?: string;
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
export declare class DescribeInstanceIpWhitelistResponseBody extends $dara.Model {
    /**
     * @remarks
     * The name of the branch specified for this operation.
     *
     * @example
     * ra-branch-123456789012abcd
     */
    branchName?: string;
    /**
     * @remarks
     * The list of IP address whitelist groups for the PostgreSQL database instance associated with the branch.
     */
    dbIpWhiteListGroups?: DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups[];
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The list of IP address whitelist groups.
     */
    ipWhiteListGroups?: DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
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
