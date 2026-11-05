import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseMembersRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token.
     *
     * @example
     * (null)
     */
    nextToken?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * This parameter is required.
     *
     * @example
     * ws-as1llqmkol****
     */
    workspaceId?: string;
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
