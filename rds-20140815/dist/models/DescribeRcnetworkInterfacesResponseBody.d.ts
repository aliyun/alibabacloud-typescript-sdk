import * as $dara from '@darabonba/typescript';
export declare class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp extends $dara.Model {
    /**
     * @example
     * `116.62.**.**`
     */
    publicIpAddress?: string;
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
export declare class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets extends $dara.Model {
    /**
     * @example
     * 2408:4321:180:1701:94c7:bc38:3bfa:****
     */
    ipv6Address?: string;
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
export declare class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets extends $dara.Model {
    primary?: boolean;
    /**
     * @example
     * `172.17.**.**`
     */
    privateIpAddress?: string;
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
export declare class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags extends $dara.Model {
    /**
     * @example
     * TestValue
     */
    tagKey?: string;
    /**
     * @example
     * TestKey
     */
    tagValue?: string;
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
export declare class DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets extends $dara.Model {
    associatedPublicIp?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsAssociatedPublicIp;
    /**
     * @example
     * 2022-12-25T12:31:31Z
     */
    creationTime?: string;
    /**
     * @example
     * DescriptionTest
     */
    description?: string;
    /**
     * @example
     * rc-m5sc1271fv344a1r****
     */
    instanceId?: string;
    ipv6Sets?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsIpv6Sets[];
    /**
     * @example
     * 00:16:3e:12:**:**
     */
    macAddress?: string;
    /**
     * @example
     * eni-bp125p95hhdhn3ot****
     */
    networkInterfaceId?: string;
    privateIpSets?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsPrivateIpSets[];
    /**
     * @example
     * rg-2ze88m67qx5z****
     */
    resourceGroupId?: string;
    securityGroupIds?: string[];
    /**
     * @example
     * Available
     */
    status?: string;
    tags?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSetsTags[];
    /**
     * @example
     * Secondary
     */
    type?: string;
    /**
     * @example
     * vsw-bp16usj2p27htro3****
     */
    vSwitchId?: string;
    /**
     * @example
     * vpc-bp1j7w3gc1cexjqd****
     */
    vpcId?: string;
    /**
     * @example
     * cn-hangzhou-e
     */
    zoneId?: string;
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
export declare class DescribeRCNetworkInterfacesResponseBody extends $dara.Model {
    networkInterfaceSets?: DescribeRCNetworkInterfacesResponseBodyNetworkInterfaceSets[];
    /**
     * @example
     * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
