import * as $dara from '@darabonba/typescript';
export declare class UnbindUserDesktopResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D5B7CF35-E078-5EBF-A010-****
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
