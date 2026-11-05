import * as $dara from '@darabonba/typescript';
export declare class UntagResourcesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6AC79B74-9A78-58E2-818B-1D38EDC64D67
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
