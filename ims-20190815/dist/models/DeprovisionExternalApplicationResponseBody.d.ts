import * as $dara from '@darabonba/typescript';
export declare class DeprovisionExternalApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4507D1CD-526A-4E2B-A1C2-3AB045D1AE0B
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
