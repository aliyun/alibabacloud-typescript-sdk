import * as $dara from '@darabonba/typescript';
export declare class CheckDBNameZonalResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database name.
     *
     * @example
     * test_db
     */
    DBName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
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
