import * as $dara from '@darabonba/typescript';
export declare class CopyDatabaseBetweenInstancesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 803D11AF-C370-465B-AB46-CB3A642DC303
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
