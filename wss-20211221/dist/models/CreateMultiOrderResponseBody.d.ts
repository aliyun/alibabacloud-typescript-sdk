import * as $dara from '@darabonba/typescript';
export declare class CreateMultiOrderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of order IDs.
     */
    orderIds?: number[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 833C4D2C-09C7-5CE6-8159-06758B964970
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
