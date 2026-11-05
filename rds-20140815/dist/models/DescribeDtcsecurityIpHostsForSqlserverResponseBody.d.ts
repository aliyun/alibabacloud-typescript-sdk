import * as $dara from '@darabonba/typescript';
export declare class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups extends $dara.Model {
    securityIpHosts?: string;
    whitelistGroupName?: string;
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
export declare class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems extends $dara.Model {
    whiteListGroups?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups[];
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
export declare class DescribeDTCSecurityIpHostsForSQLServerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The number of entries in the distributed transaction whitelist.
     *
     * @example
     * 1
     */
    ipHostPairNum?: string;
    items?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 2CA62A70-2203-45C6-8E90-8971D5ACC0C2
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
