import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * pm-2ze9***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the PolarDB instance for AI model services.
     *
     * @example
     * pc-2zejpr***
     */
    relativeDBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E56531A4-E552-40BA-9C58-137B80******
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
