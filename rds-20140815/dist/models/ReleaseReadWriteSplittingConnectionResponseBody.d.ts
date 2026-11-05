import * as $dara from '@darabonba/typescript';
export declare class ReleaseReadWriteSplittingConnectionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 5A77D650-27A1-4E08-AD9E-59008EDB6927
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
