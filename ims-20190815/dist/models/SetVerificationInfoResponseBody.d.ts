import * as $dara from '@darabonba/typescript';
export declare class SetVerificationInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B182C041-8C64-5F2F-A07B-FC67FAF89CF9
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
