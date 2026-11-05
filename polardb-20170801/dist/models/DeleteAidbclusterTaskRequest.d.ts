import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * pm-2ze9***
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
     * The ID of the PolarDB database instance for the AI model service.
     *
     * @example
     * pc-2zejpr***
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
