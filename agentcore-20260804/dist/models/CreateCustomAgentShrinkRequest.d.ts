import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The JSON configuration of the custom code or image agent. You must specify name, artifact, roleArn, and runtime.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The idempotency token passed as a query parameter. This parameter is required when you explicitly submit a customImage or set container.type to custom. It is optional when you submit an ACR image or a code package. The token must be 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens. Reuse the same token for retries of the same submission. If you use the same token for different parameters, the request is rejected.
     *
     * @example
     * custom-agent-request-20261010-001
     */
    clientToken?: string;
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
