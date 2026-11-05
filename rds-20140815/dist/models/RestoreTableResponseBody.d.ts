import * as $dara from '@darabonba/typescript';
export declare class RestoreTableResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EA2D4F34-01A7-46EB-A339-D80882135206
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
