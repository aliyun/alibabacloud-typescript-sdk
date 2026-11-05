import * as $dara from '@darabonba/typescript';
export declare class DeleteAgenticDBTenantResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 01A13E8C-3773-1A76-BA95-96EA81D260DC
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
