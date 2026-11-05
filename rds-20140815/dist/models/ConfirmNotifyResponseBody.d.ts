import * as $dara from '@darabonba/typescript';
export declare class ConfirmNotifyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6919FA39-04CF-571F-A6B0-DCC7AECB4170
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
