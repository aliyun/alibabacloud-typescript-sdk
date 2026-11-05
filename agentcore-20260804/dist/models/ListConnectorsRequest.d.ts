import * as $dara from '@darabonba/typescript';
export declare class ListConnectorsRequest extends $dara.Model {
    /**
     * @remarks
     * The page size. The current version does not support this parameter.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The next page token. The current version does not support this parameter.
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
