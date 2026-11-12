import * as $dara from '@darabonba/typescript';
export declare class ListIdentityProvidersRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of records to return per page. Valid values: 1 to 100. Default value: 10.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The cursor for querying the next page. Do not specify this parameter for the first call. For subsequent calls, specify the nextToken returned from the previous call.
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
