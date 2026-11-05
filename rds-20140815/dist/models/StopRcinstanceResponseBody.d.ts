import * as $dara from '@darabonba/typescript';
export declare class StopRCInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E36DB6E-AE3B-53B6-A703-85F883FD1B2C
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
