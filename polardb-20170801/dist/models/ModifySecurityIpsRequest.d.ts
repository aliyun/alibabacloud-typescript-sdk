import * as $dara from '@darabonba/typescript';
export declare class ModifySecurityIpsRequest extends $dara.Model {
    /**
     * @remarks
     * The property of the IP address whitelist group.
     *
     * @example
     * hidden
     */
    DBClusterIPArrayAttribute?: string;
    /**
     * @remarks
     * The name of the IP address whitelist group.
     *
     * @example
     * default
     */
    DBClusterIPArrayName?: string;
    /**
     * @remarks
     * The ID of the PolarDB cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-******************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The IP addresses or CIDR blocks in the whitelist. Separate multiple values with commas.
     *
     * This parameter is required.
     *
     * @example
     * 10.23.12.24
     */
    securityIps?: string;
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
