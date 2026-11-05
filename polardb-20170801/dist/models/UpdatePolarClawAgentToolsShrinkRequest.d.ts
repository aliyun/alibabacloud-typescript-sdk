import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawAgentToolsShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * Agent ID
     *
     * This parameter is required.
     *
     * @example
     * work
     */
    agentId?: string;
    /**
     * @remarks
     * The list of explicitly allowed tools.
     *
     * @example
     * ["read","write","exec"]
     */
    allowShrink?: string;
    /**
     * @remarks
     * The list of additionally allowed tools.
     *
     * @example
     * ["send_message"]
     */
    alsoAllowShrink?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The list of denied tools.
     *
     * @example
     * ["exec"]
     */
    denyShrink?: string;
    /**
     * @remarks
     * The tool profile.
     *
     * @example
     * coding
     */
    profile?: string;
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
