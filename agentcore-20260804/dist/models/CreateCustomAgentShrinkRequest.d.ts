import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The JSON configuration of the custom agent. You must specify the name, artifact, roleArn, and runtime parameters.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * Idempotence is currently not guaranteed. Do not rely on this parameter to prevent duplicate requests.
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
