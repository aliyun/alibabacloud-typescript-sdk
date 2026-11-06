import * as $dara from '@darabonba/typescript';
export declare class ListTeamsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of records to return per page. Valid values: 1 to 100. If this parameter is not specified, 10 records are returned by default.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The filter condition for fuzzy matching the team name.
     *
     * @example
     * team
     */
    nameLike?: string;
    /**
     * @remarks
     * The cursor for querying the next page. Do not specify this parameter for the first call. For subsequent calls, specify the nextToken value returned in the previous response.
     *
     * @example
     * dGVhbS1vZmZzZXQ6MTA
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
