import * as $dara from '@darabonba/typescript';
export declare class CreateDBLinkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F9F1CB1A-B1D5-4EF5-A53A-************
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
