import * as $dara from '@darabonba/typescript';
export declare class ModifyModelApiResponseBody extends $dara.Model {
    /**
     * @remarks
     * The model API ID.
     *
     * @example
     * mi-xxxxx
     */
    modelApiId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
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
