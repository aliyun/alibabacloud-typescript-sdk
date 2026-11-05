import * as $dara from '@darabonba/typescript';
export declare class ModifyGlobalDatabaseNetworkRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to create a global domain name.
     *
     * @example
     * false
     */
    enableGlobalDomainName?: boolean;
    /**
     * @remarks
     * The description of the GDN. It must meet the following requirements:
     *
     * - Cannot start with http\\:// or https\\://.
     *
     * - Must start with a letter or a Chinese character.
     *
     * - Can contain letters, Chinese characters, digits, underscores (_), and hyphens (-).
     *
     * - Must be 2 to 126 characters in length.
     *
     * @example
     * GDN-fortest
     */
    GDNDescription?: string;
    /**
     * @remarks
     * The ID of the GDN.
     *
     * This parameter is required.
     *
     * @example
     * gdn-bp1fttxsrmv*****
     */
    GDNId?: string;
    ownerAccount?: string;
    ownerId?: number;
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
    securityToken?: string;
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
