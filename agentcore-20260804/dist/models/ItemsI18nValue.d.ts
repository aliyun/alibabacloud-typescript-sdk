import * as $dara from '@darabonba/typescript';
export declare class ItemsI18nValue extends $dara.Model {
    /**
     * @remarks
     * The description of the MCP service in the language.
     *
     * @example
     * MCP service for querying knowledge bases
     */
    description?: string;
    /**
     * @remarks
     * The name of the MCP marketplace template in the language.
     *
     * @example
     * Knowledge base
     */
    name?: string;
    /**
     * @remarks
     * The usage instructions of the MCP marketplace template in the language.
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
