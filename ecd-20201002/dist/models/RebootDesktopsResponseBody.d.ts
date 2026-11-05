import * as $dara from '@darabonba/typescript';
export declare class RebootDesktopsResponseBody extends $dara.Model {
    /**
     * @remarks
     * Request ID.
     *
     * @example
     * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
