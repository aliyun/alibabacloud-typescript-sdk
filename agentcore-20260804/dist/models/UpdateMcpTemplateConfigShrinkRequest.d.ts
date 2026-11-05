import * as $dara from '@darabonba/typescript';
export declare class UpdateMcpTemplateConfigShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The MCP configuration to update by the specified template version. The configuration must conform to the input schema of the template.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotency of the request.
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
