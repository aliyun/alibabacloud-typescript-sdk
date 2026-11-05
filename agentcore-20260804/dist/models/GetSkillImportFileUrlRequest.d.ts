import * as $dara from '@darabonba/typescript';
export declare class GetSkillImportFileUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The Content-Type of the uploaded file. Default value: application/zip.
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
