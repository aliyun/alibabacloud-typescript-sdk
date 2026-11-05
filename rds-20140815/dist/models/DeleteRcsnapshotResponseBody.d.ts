import * as $dara from '@darabonba/typescript';
export declare class DeleteRCSnapshotResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8BE834C8-3C25-5AF8-BE3E-C8A690602A7F
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
