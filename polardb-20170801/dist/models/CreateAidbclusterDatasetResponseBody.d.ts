import * as $dara from '@darabonba/typescript';
export declare class CreateAIDBClusterDatasetResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB database cluster.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The dataset management service ID.
     *
     * @example
     * pcs-2zeei***
     */
    dataServiceId?: string;
    /**
     * @remarks
     * The dataset ID.
     *
     * @example
     * pds-2ze88***
     */
    datasetId?: string;
    /**
     * @remarks
     * The dataset name.
     *
     * @example
     * dataset01
     */
    datasetName?: string;
    /**
     * @remarks
     * The path to the dataset.
     *
     * @example
     * polardb_ai/datasets/train/sft/dataset01
     */
    path?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CD35F3-F3-44CA-AFFF-BAF869******
     */
    requestId?: string;
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
