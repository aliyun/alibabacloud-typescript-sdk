import * as $dara from '@darabonba/typescript';
export declare class ModifyDBNodeSccModeRequest extends $dara.Model {
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
     * The node ID.
     *
     * This parameter is required.
     *
     * @example
     * pi-****************
     */
    DBNodeId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The SCC mode to set for the node.
     *
     * This parameter is required.
     *
     * @example
     * OFF
     */
    sccMode?: string;
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
