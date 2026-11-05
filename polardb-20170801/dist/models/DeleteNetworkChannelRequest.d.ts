import * as $dara from '@darabonba/typescript';
export declare class DeleteNetworkChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the channel.
     *
     * This parameter is required.
     *
     * @example
     * ch4
     */
    channelName?: string;
    /**
     * @remarks
     * A client token that ensures request idempotence. The client generates this token. It must be unique across requests. The token is case-sensitive and can contain up to 64 ASCII characters.
     *
     * @example
     * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
     */
    clientToken?: string;
    /**
     * @remarks
     * The name of the target instance.
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
     * The ID of the resource group.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC) where the endpoint is located.
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
