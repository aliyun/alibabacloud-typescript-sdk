import * as $dara from '@darabonba/typescript';
export declare class GetAgentSpecImportFileUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The Content-Type of the uploaded file. You must use the same value returned in the response when the client sends a PUT request.
     *
     * @example
     * application/zip
     */
    contentType?: string;
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
