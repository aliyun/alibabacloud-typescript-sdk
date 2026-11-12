import * as $dara from '@darabonba/typescript';
export declare class CreateAIDBClusterDatasetRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the AI database cluster. The cluster must have DBType set to polardb_ai. This parameter is required. If it is not provided, the service returns InvalidDBClusterId.Malformed (404).
     *
     * @example
     * pc-2ze88***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the dataset.
     *
     * @example
     * dataset01
     */
    datasetName?: string;
    /**
     * @remarks
     * The dataset type. Valid values:
     * * **train**: training dataset
     * * **eval**: evaluation dataset
     *
     * @example
     * train
     */
    datasetType?: string;
    /**
     * @remarks
     * The import method. Valid values:
     * * **LocalImport**: local import
     *
     * @example
     * LocalImport
     */
    importMode?: string;
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
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The training mode for the dataset. Dataset formats vary by mode. Valid values:
     * * **sft**: supervised fine-tuning, dedicated to training datasets
     * * **grpo**: reinforcement learning optimization, dedicated to training datasets
     * * **text**: text generation, dedicated to validation datasets
     *
     * @example
     * sft
     */
    trainMode?: string;
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
