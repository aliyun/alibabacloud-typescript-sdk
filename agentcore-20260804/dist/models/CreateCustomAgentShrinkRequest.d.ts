import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The JSON configuration of the custom code or image agent. You must specify name, artifact, roleArn, and runtime.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The idempotency token passed as a query parameter. This parameter is required when explicitly submitting a customImage or setting container.type to custom, and is optional for ACR image and code package submissions. The token must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), colons (:), and hyphens (-). Reuse the same token for retries of the same submission. If the same token is used with different parameters, the request is rejected.
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
