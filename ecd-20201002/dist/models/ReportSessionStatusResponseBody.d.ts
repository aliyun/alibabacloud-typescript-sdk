import * as $dara from '@darabonba/typescript';
export declare class ReportSessionStatusResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 0EE5DE20-25F4-5870-9D56-C259A45B****
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
