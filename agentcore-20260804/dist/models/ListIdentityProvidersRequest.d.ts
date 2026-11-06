import * as $dara from '@darabonba/typescript';
export declare class ListIdentityProvidersRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries to return on a single page. Valid values: 1 to 100. If you do not specify this parameter, 10 entries are returned by default.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The cursor for querying the next page. Do not specify this parameter in the first call. In subsequent calls, specify the nextToken value returned from the previous call.
     *
     * @example
     * aWRlbnRpdHktcHJvdmlkZXItb2Zmc2V0OjEw
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
