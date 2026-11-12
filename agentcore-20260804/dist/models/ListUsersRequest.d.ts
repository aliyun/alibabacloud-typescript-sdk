import * as $dara from '@darabonba/typescript';
export declare class ListUsersRequest extends $dara.Model {
    /**
     * @remarks
     * The filter condition for exact match on the email address.
     *
     * @example
     * xxx@xxx.com
     */
    email?: string;
    /**
     * @remarks
     * The maximum number of records to return per page. Valid values: 1 to 100. If you do not specify this parameter, 10 records are returned by default.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The filter condition for exact match on the username.
     *
     * @example
     * user-01
     */
    name?: string;
    /**
     * @remarks
     * The filter condition for fuzzy match on the username. The value can be up to 128 characters in length.
     *
     * @example
     * user
     */
    nameLike?: string;
    /**
     * @remarks
     * The cursor for querying the next page. Do not specify this parameter for the first call. For subsequent calls, specify the nextToken value returned from the previous call.
     *
     * @example
     * dXNlci1vZmZzZXQ6MTA
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
