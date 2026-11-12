import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup extends $dara.Model {
    securityGroupId?: string;
    securityGroupName?: string;
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
export declare class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups extends $dara.Model {
    DBClusterSecurityGroup?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup[];
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
export declare class DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray extends $dara.Model {
    DBClusterIPArrayAttribute?: string;
    DBClusterIPArrayName?: string;
    securityIps?: string;
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
export declare class DescribeDBClusterAccessWhitelistResponseBodyItems extends $dara.Model {
    DBClusterIPArray?: DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray[];
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
export declare class DescribeDBClusterAccessWhitelistResponseBodyProjectItemsDBClusterProjectIPArray extends $dara.Model {
    defaultOpen?: boolean;
    projectId?: string;
    revision?: number;
    securityIps?: string;
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
export declare class DescribeDBClusterAccessWhitelistResponseBodyProjectItems extends $dara.Model {
    DBClusterProjectIPArray?: DescribeDBClusterAccessWhitelistResponseBodyProjectItemsDBClusterProjectIPArray[];
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
export declare class DescribeDBClusterAccessWhitelistResponseBody extends $dara.Model {
    DBClusterSecurityGroups?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups;
    items?: DescribeDBClusterAccessWhitelistResponseBodyItems;
    /**
     * @example
     * [
     *     {
     *       "ProjectId": "proj-xxxxxxxxxxxxxxxxxxxxxxxxxx",
     *       "SecurityIps": "192.168.1.1,192.168.2.0/24",
     *       "DefaultOpen": false,
     *       "Revision": 3
     *     }
     *   ]
     */
    projectItems?: DescribeDBClusterAccessWhitelistResponseBodyProjectItems;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 559E91A2-CDA3-4E9F-808B-29D738******
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
