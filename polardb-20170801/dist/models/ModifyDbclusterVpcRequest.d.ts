import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterVpcRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to switch existing endpoints. Valid values:
     *
     * - **NONE**: Does not switch existing endpoints.
     *
     * - **ALL**: Switches all existing endpoints.
     *
     * This parameter is required.
     *
     * @example
     * NONE
     */
    existedEndpointSwitchType?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC).
     *
     * @example
     * vpc-*******************
     */
    VPCId?: string;
    /**
     * @remarks
     * The ID of the virtual switch.
     *
     * This parameter is required.
     *
     * @example
     * vsw-**********
     */
    vSwitchId?: string;
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
