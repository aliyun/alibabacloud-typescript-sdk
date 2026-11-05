import * as $dara from '@darabonba/typescript';
export declare class DescribeNetworkChannelResponseBodyChannelInfos extends $dara.Model {
    /**
     * @remarks
     * The channel name.
     *
     * @example
     * ch4
     */
    channelName?: string;
    /**
     * @remarks
     * The source instance name.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the elastic network interfaces (ENIs) used by the reverse access link of the network channel. The network interface controller (NIC) is used for the connection.
     *
     * @example
     * eni-2z******
     */
    eniId?: string;
    /**
     * @remarks
     * The remarks.
     *
     * @example
     * test update
     */
    notes?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The target instance name.
     *
     * @example
     * pc-*************
     */
    targetDBClusterId?: string;
    /**
     * @remarks
     * The IP address of the target instance.
     *
     * @example
     * 33.*.*.240
     */
    targetIp?: string;
    /**
     * @remarks
     * The port of the target instance.
     *
     * @example
     * 3389
     */
    targetPort?: string;
    /**
     * @remarks
     * The target instance type.
     *
     * @example
     * polardb_for_postgresql
     */
    targetType?: string;
    /**
     * @remarks
     * The ID of the VPC where the access endpoint resides.
     *
     * @example
     * vpc-2ze13g2c6j7j2jl*******
     */
    vpcId?: string;
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
export declare class DescribeNetworkChannelResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of network channels.
     */
    channelInfos?: DescribeNetworkChannelResponseBodyChannelInfos[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
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
