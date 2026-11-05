import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterSSLResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A94B1755-6D8B-4E27-BF3C-8562BC******
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
