import * as $dara from '@darabonba/typescript';
export declare class InstallMcpMarketItemShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The MCP configuration submitted when installing the template. The configuration must conform to the input schema of the template.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The reserved query request identifier. The console backend does not read this parameter and does not provide idempotency guarantees for deduplication or restoring original results based on this identifier.
     *
     * @example
     * 123e4567-e89b-12d3-a456-426655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The template version to be installed. You can call GetMcpMarketItem to query available versions.
     *
     * This parameter is required.
     *
     * @example
     * 1.0.0
     */
    templateVersion?: string;
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
