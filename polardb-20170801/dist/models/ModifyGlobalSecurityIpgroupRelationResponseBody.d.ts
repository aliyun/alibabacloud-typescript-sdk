import * as $dara from '@darabonba/typescript';
export declare class ModifyGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel extends $dara.Model {
    /**
     * @remarks
     * The IP addresses in the whitelist template.
     *
     * > Separate multiple IP addresses with a comma. A maximum of 1,000 IP addresses or CIDR blocks can be added to all IP address whitelists.
     *
     * @example
     * 192.168.0.1
     */
    GIpList?: string;
    /**
     * @remarks
     * The name of the IP address whitelist template. The name must meet the following requirements:
     *
     * - Consists of lowercase letters, digits, and underscores (_).
     *
     * - Starts with a letter and ends with a letter or a digit.
     *
     * - Is 2 to 120 characters in length.
     *
     * @example
     * test_123
     */
    globalIgName?: string;
    /**
     * @remarks
     * The ID of the IP address whitelist template.
     *
     * @example
     * g-zsldxfiwjmti0kcm****
     */
    globalSecurityGroupId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
export declare class ModifyGlobalSecurityIPGroupRelationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Details of the global IP address whitelist template.
     */
    globalSecurityIPGroupRel?: ModifyGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9B7BFB11-C077-4FE3-B051-F69CEB******
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
