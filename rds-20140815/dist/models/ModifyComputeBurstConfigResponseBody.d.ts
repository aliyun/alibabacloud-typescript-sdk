import * as $dara from '@darabonba/typescript';
export declare class ModifyComputeBurstConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C816A4BF-A6EC-4722-95F9-2055859CCFD2
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
