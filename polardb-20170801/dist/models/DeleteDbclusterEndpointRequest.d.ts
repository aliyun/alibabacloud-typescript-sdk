import * as $dara from '@darabonba/typescript';
export declare class DeleteDBClusterEndpointRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-******************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The custom cluster endpoint ID.
     *
     * This parameter is required.
     *
     * @example
     * pe-******************
     */
    DBEndpointId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The PolarFs instance ID.
     *
     * @example
     * pfs-test*****
     */
    polarFsInstanceId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
