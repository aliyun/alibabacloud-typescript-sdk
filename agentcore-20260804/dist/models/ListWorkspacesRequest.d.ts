import * as $dara from '@darabonba/typescript';
export declare class ListWorkspacesRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of records to return per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The cursor used to query the next page.
     *
     * @example
     * d29ya3NwYWNlLW9mZnNldDoyMA
     */
    nextToken?: string;
    /**
     * @remarks
     * The number of workspaces to skip.
     *
     * @example
     * 0
     */
    skip?: number;
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
