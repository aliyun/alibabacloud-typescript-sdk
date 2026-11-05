import * as $dara from '@darabonba/typescript';
export declare class CreateDatabaseZonalResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 93E98F25-BE02-40DA-83E3-F77F8D******
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
