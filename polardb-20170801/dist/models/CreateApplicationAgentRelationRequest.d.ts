import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationAgentRelationRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the Agent to attach.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    agentId?: string;
    /**
     * @remarks
     * The ID of the Squad application.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The authentication token.
     *
     * This parameter is required.
     *
     * @example
     * pas_xxx
     */
    token?: string;
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
