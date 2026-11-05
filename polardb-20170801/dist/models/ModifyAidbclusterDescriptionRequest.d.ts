import * as $dara from '@darabonba/typescript';
export declare class ModifyAIDBClusterDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster description.
     *
     * This parameter is required.
     *
     * @example
     * test
     */
    DBClusterDescription?: string;
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
    ownerAccount?: string;
    ownerId?: number;
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
