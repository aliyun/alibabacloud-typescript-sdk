import * as $dara from '@darabonba/typescript';
export declare class ResetAccountResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 81BC9559-7B22-4B7F-B705-5F56DEECDEA7
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
