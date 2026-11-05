import * as $dara from '@darabonba/typescript';
export declare class CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $dara.Model {
    /**
     * @remarks
     * The IP addresses in the whitelist template.
     *
     * > Separate multiple IP addresses with commas (,). You can add a total of up to 1,000 IP addresses or CIDR blocks to all IP whitelists.
     *
     * @example
     * 192.168.0.1
     */
    GIpList?: string;
    /**
     * @remarks
     * The name of the IP whitelist template. The name must meet the following requirements:
     *
     * - It can contain lowercase letters, digits, and underscores (_).
     *
     * - It must start with a letter and end with a letter or digit.
     *
     * - It must be 2 to 120 characters in length.
     *
     * @example
     * test_123
     */
    globalIgName?: string;
    /**
     * @remarks
     * The ID of the IP whitelist template.
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
export declare class CreateGlobalSecurityIPGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the global IP whitelist template.
     */
    globalSecurityIPGroup?: CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
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
