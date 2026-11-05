import * as $dara from '@darabonba/typescript';
export declare class DeletePolarClawAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the agent to delete. The value cannot be main. You can obtain this value from the response of CreatePolarClawAgent.
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
     * Specifies whether to delete the working directory and session files. Default value: true.
     *
     * @example
     * true
     */
    deleteFiles?: boolean;
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
