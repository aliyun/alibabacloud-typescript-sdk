import * as $dara from '@darabonba/typescript';
export declare class BatchDeleteModelsRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of model IDs.
     *
     * This parameter is required.
     */
    modelIds?: string[];
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
export declare class BatchDeleteModelsRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: BatchDeleteModelsRequestBody;
    /**
     * @remarks
     * The client token used for idempotence. This parameter is not supported.
     *
     * @example
     * client-token-1
     */
    clientToken?: string;
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
