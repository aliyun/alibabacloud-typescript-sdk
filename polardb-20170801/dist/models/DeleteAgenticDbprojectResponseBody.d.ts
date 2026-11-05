import * as $dara from '@darabonba/typescript';
export declare class DeleteAgenticDBProjectResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F6A7B8C9-D0E1-2345-FABC-456789012345
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
