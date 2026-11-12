import * as $dara from '@darabonba/typescript';
export declare class ItemsI18nValue extends $dara.Model {
    /**
     * @remarks
     * The MCP service description in the specified language.
     *
     * @example
     * MCP service for querying knowledge bases
     */
    description?: string;
    /**
     * @remarks
     * The MCP marketplace template name in the specified language.
     *
     * @example
     * Knowledge Base
     */
    name?: string;
    /**
     * @remarks
     * The usage instructions for the MCP marketplace template in the specified language.
     *
     * @example
     * # Knowledge Base\\nKnowledge base query service
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
