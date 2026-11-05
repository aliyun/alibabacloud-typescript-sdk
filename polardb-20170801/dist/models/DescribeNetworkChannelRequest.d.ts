import * as $dara from '@darabonba/typescript';
export declare class DescribeNetworkChannelRequest extends $dara.Model {
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
     * The client token that is used to ensure the idempotence of the request. The client generates the token and ensures that it is unique across requests. The token is case-sensitive and can contain up to 64 ASCII characters.
     *
     * @example
     * 6000170000591aed949d0f54a343f1a4233c1e7d1c5******
     */
    clientToken?: string;
    /**
     * @remarks
     * The source instance name.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
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
     * The resource group ID.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the VPC where the access endpoint resides.
     *
     * @example
     * vpc-bp1qpo0kug3a20qqe****
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
