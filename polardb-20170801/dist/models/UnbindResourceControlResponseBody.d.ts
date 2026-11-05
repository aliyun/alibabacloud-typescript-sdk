import * as $dara from '@darabonba/typescript';
export declare class UnbindResourceControlResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 22C0ACF0-DD29-4B67-9190-B7A48C******
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
