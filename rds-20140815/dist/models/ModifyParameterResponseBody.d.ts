import * as $dara from '@darabonba/typescript';
export declare class ModifyParameterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 542BB8D6-4268-45CC-A557-B03EFD7AB30A
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
