import * as $dara from '@darabonba/typescript';
export declare class ModifyDBProxyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FC452BB1-EED8-4278-95C7-0324B3710DF1
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
