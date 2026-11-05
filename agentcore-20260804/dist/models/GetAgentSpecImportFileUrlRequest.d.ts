import * as $dara from '@darabonba/typescript';
export declare class GetAgentSpecImportFileUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The Content-Type of the uploaded file. The client must use the same value in the PUT request as the one returned in the response.
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
