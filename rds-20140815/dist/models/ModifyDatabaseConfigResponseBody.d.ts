import * as $dara from '@darabonba/typescript';
export declare class ModifyDatabaseConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The code.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F5C79A20-E931-5389-BC04-DEBA2D3ABD8D
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
