import * as $dara from '@darabonba/typescript';
export declare class DeleteBackupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 37441409-FFD1-40AA-8EC5-9ECF5E2F7C29
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
