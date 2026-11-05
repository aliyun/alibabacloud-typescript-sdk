import * as $dara from '@darabonba/typescript';
export declare class CreateGlobalDatabaseNetworkRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the primary cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-bp1q76364ird*****
     */
    DBClusterId?: string;
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
     * The description of the GDN. The description must meet the following requirements:
     *
     * - It cannot start with http\\:// or https\\://.
     *
     * - It must start with a letter or a Chinese character.
     *
     * - It can contain letters, Chinese characters, digits, underscores (_), and hyphens (-).
     *
     * - It must be 2 to 126 characters in length.
     *
     * @example
     * GDN-fortest
     */
    GDNDescription?: string;
    /**
     * @remarks
     * The GDN version.
     *
     * @example
     * 2.0
     */
    GDNVersion?: string;
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
