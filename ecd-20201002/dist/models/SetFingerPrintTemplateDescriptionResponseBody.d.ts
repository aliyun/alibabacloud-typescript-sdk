import * as $dara from '@darabonba/typescript';
export declare class SetFingerPrintTemplateDescriptionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * BBD7DFD1-A5DE-51D9-8FD6-3BF54EF4****
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
