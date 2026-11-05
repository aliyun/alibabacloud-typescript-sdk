import * as $dara from '@darabonba/typescript';
export declare class DeleteServiceCredentialResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 492E130C-76D3-55D5-BE5C-C023E431369A
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
