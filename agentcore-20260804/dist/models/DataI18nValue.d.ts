import * as $dara from '@darabonba/typescript';
export declare class DataI18nValue extends $dara.Model {
    /**
     * @remarks
     * The MCP service description in this language.
     *
     * @example
     * MCP service for querying knowledge bases
     */
    description?: string;
    /**
     * @remarks
     * The MCP marketplace template name in this language.
     *
     * @example
     * Knowledge base
     */
    name?: string;
    /**
     * @remarks
     * The MCP marketplace template instructions in this language.
     *
     * @example
     * # Knowledge base\\nKnowledge base query service
     */
    readme?: string;
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
