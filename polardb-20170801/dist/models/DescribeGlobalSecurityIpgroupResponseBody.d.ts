import * as $dara from '@darabonba/typescript';
export declare class DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $dara.Model {
    /**
     * @remarks
     * The list of clusters associated with the IP allowlist template.
     */
    DBInstances?: string[];
    /**
     * @remarks
     * The IP addresses in the allowlist template.
     *
     * > Separate multiple IP addresses with commas (,). You can add up to 1,000 IP addresses or CIDR blocks to all IP allowlists in total.
     *
     * @example
     * 192.168.0.1
     */
    GIpList?: string;
    /**
     * @remarks
     * The name of the IP allowlist template. The name of the IP allowlist template must meet the following requirements:
     *
     * - The name can contain lowercase letters, digits, and underscores (_).
     *
     * - The name must start with a letter and end with a letter or a digit.
     *
     * - The name must be 2 to 120 characters in length.
     *
     * @example
     * test_123
     */
    globalIgName?: string;
    /**
     * @remarks
     * The ID of the IP allowlist template.
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
export declare class DescribeGlobalSecurityIPGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the global IP allowlist template.
     */
    globalSecurityIPGroup?: DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
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
