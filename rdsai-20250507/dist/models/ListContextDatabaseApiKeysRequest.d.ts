import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseApiKeysRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries per page.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The member ID.
     *
     * This parameter is required.
     *
     * @example
     * mb-cz51tnnp8****
     */
    memberId?: string;
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
