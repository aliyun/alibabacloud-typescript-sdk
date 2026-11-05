import * as $dara from '@darabonba/typescript';
export declare class DeleteAgenticDBBranchResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D4E5F6A7-B8C9-0123-DEFA-456789012DEF
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
