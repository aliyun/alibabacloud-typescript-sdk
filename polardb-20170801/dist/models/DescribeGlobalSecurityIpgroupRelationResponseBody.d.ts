import * as $dara from '@darabonba/typescript';
export declare class DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel extends $dara.Model {
    /**
     * @remarks
     * The IP address in the global IP whitelist template.
     *
     * >  Separate multiple IP addresses with commas (,). You can add up to 1,000 IP addresses or CIDR blocks to all IP whitelists.
     *
     * @example
     * 192.168.0.1
     */
    GIpList?: string;
    /**
     * @remarks
     * The name of the global IP whitelist template. The name must meet the following requirements:
     *
     * *   The name can contain lowercase letters, digits, and underscores (_).
     * *   The name must start with a letter and end with a letter or a digit.
     * *   The name must be 2 to 120 characters in length.
     *
     * @example
     * test_123
     */
    globalIgName?: string;
    /**
     * @remarks
     * The ID of the global IP whitelist template.
     *
     * @example
     * g-zsldxfiwjmti0kcm****
     */
    globalSecurityGroupId?: string;
    /**
     * @remarks
     * The ID of the region.
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
export declare class DescribeGlobalSecurityIPGroupRelationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of cluster.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The details of the global IP whitelist template.
     */
    globalSecurityIPGroupRel?: DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel[];
    /**
     * @remarks
     * The ID of the request.
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
