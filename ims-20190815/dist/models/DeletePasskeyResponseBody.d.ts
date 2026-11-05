import * as $dara from '@darabonba/typescript';
export declare class DeletePasskeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8A1673AA-5DB3-5AFB-8758-AF9EC2889259
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
