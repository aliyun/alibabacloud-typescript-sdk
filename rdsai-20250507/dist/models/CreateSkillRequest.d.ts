import * as $dara from '@darabonba/typescript';
export declare class CreateSkillRequest extends $dara.Model {
    /**
     * @remarks
     * The content.
     *
     * @example
     * {"MySQL": "MySQL optimization guide...","PostgreSQL": "PostgreSQL optimization guide..."}
     */
    content?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The list of database types.
     */
    dbtypes?: string[];
    /**
     * @remarks
     * The skill description. The description can be up to 1000 characters in length.
     *
     * @example
     * SQL query optimization skill
     */
    description?: string;
    /**
     * @remarks
     * The skill name. The name can contain only lowercase letters, digits, and hyphens.
     *
     * @example
     * query-optimization
     */
    name?: string;
    /**
     * @remarks
     * The ContextDB skill version update note. Provide this value when confirming storage after validation passes. The note can be up to 1000 characters in length.
     *
     * @example
     * Initial release
     */
    updateNote?: string;
    /**
     * @remarks
     * The skill upload session ID.
     *
     * @example
     * upload-example
     */
    uploadId?: string;
    /**
     * @remarks
     * The skill upload session token.
     *
     * @example
     * token-example
     */
    uploadToken?: string;
    /**
     * @remarks
     * The ContextDB workspace ID.
     *
     * @example
     * 00000000-0000-4000-8000-000000000001
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
