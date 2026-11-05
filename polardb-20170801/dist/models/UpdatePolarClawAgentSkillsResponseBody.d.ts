import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawAgentSkillsResponseBody extends $dara.Model {
    /**
     * @remarks
     * Agent ID
     *
     * @example
     * work
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The returned status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation is successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * F45FFACC-xxx
     */
    requestId?: string;
    /**
     * @remarks
     * The updated skill list.
     */
    skills?: string[];
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
