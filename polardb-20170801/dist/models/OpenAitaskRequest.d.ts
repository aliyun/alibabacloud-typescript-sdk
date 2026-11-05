import * as $dara from '@darabonba/typescript';
export declare class OpenAITaskRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The node type. Valid values:
     *
     * - **DLNode**: AI node.
     *
     * - **SearchNode**: search AI node.
     *
     * @example
     * DLNode
     */
    nodeType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The password of the database account.
     *
     * @example
     * testPassword
     */
    password?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
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
     * The database account on which to enable the PolarDB for AI feature.
     *
     * @example
     * testAccountName
     */
    username?: string;
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
