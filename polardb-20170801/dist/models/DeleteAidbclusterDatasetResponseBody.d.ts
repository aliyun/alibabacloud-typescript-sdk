import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterDatasetResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the Data Service instance.
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
     * pds-xxxxxxxxxxxxxxxx
     */
    datasetId?: string;
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
