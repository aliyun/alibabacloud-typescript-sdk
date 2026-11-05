import * as $dara from '@darabonba/typescript';
export declare class UnbindPolarClawAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the agent to disassociate.
     *
     * This parameter is required.
     *
     * @example
     * work
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The channel plugin ID.
     *
     * This parameter is required.
     *
     * @example
     * feishu
     */
    channel?: string;
    /**
     * @remarks
     * The channel account ID. If you do not specify this parameter, all bindings under the specified agent and channel are removed.
     *
     * @example
     * default
     */
    channelAccountId?: string;
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
