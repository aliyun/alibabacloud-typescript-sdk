import * as $dara from '@darabonba/typescript';
export declare class DeleteAgenticDBTenantApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E5F6A7B8-C9D0-1234-EFAB-345678901234
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
