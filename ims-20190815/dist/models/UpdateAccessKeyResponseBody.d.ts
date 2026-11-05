import * as $dara from '@darabonba/typescript';
export declare class UpdateAccessKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B9AF80E4-1565-42D9-9256-0B8B0D9FD3EC
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
