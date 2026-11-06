import * as $dara from '@darabonba/typescript';
export declare class ListAgentCodeRuntimesRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of records per page.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The next page token.
     *
     * @example
     * d3MtYTFiMmMzZDRlNWY2CmNvZGUtcnVudGltZS1leGFtcGxlCjE
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
