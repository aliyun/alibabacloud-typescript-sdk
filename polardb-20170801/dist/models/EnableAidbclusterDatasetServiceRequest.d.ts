import * as $dara from '@darabonba/typescript';
export declare class EnableAIDBClusterDatasetServiceRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the PolarFS cold storage instance attached to the dataset management service.
     *
     * @example
     * pcs-2ze26***
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The instance ID of the database instance attached to the dataset management service.
     *
     * @example
     * pc-2ze88***
     */
    relativeDBClusterId?: string;
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
