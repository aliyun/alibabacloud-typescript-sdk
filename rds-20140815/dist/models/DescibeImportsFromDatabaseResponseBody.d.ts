import * as $dara from '@darabonba/typescript';
export declare class DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB extends $dara.Model {
    importDataStatus?: string;
    importDataStatusDescription?: string;
    importDataType?: string;
    importId?: number;
    incrementalImportingTime?: string;
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
export declare class DescibeImportsFromDatabaseResponseBodyItems extends $dara.Model {
    importResultFromDB?: DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB[];
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
export declare class DescibeImportsFromDatabaseResponseBody extends $dara.Model {
    items?: DescibeImportsFromDatabaseResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B000AA91-393D-46F9-8D9B-098E28931A3A
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
