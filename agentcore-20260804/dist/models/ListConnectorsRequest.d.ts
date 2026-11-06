import * as $dara from '@darabonba/typescript';
export declare class ListConnectorsRequest extends $dara.Model {
    /**
     * @remarks
     * The page size. This parameter is not supported in the current version.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The next token. This parameter is not supported in the current version.
     *
     * @example
     * dGVzdA==
     */
    nextToken?: string;
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
