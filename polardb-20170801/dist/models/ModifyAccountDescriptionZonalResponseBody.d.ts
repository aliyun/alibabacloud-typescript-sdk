import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountDescriptionZonalResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
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
