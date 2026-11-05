import * as $dara from '@darabonba/typescript';
export declare class AttachRCDiskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C19D1668-70CB-5421-AA91-D6D8EE3AB664
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
