import * as $dara from '@darabonba/typescript';
export declare class DeleteFingerPrintTemplateResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 134BD0B2-B848-5743-9CE2-C1FD3D5F****
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
