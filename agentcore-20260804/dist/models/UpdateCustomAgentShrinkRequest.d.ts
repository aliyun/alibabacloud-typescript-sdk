import * as $dara from '@darabonba/typescript';
export declare class UpdateCustomAgentShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The update configuration of the custom agent. Provide at least one top-level field. Omitted top-level fields retain their original values. When artifact retains the existing source, partial subfields can be updated. Provide compute and sessionPolicy for runtime based on the structure, and include the complete hpa to be retained. Replace environment.variables and other arrays with the complete lists.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The idempotency token for the submission. The token must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), colons (:), and hyphens (-). This parameter is required when you explicitly submit customImage. Once provided, the submission is recorded by tenant and workspace. Retrying with the same parameters returns the existing acceptance result. You must use a new token for different submission content. If this parameter is not provided, query the update status before retrying.
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
