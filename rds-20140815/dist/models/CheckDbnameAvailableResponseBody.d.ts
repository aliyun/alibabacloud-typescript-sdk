import * as $dara from '@darabonba/typescript';
export declare class CheckDBNameAvailableResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     * >If only the request ID is returned, the database name is available. Otherwise, an error message is returned, indicating that the database name is duplicate or does not comply with naming conventions.
     *
     * @example
     * 6EF82B07-28D2-48D1-B5D6-7E78FED277C7
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
