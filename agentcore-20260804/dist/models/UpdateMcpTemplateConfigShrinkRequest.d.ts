import * as $dara from '@darabonba/typescript';
export declare class UpdateMcpTemplateConfigShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The MCP configuration updated based on the specified template version, which must comply with the input schema of the template.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The reserved query request identifier. The current console backend does not read this parameter and does not provide idempotency guarantees such as deduplication or restoring the original processing result based on this identifier.
     *
     * @example
     * 123e4567-e89b-12d3-a456-426655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The template version used for this update.
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
