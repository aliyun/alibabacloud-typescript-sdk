import * as $dara from '@darabonba/typescript';
export declare class DeletePolarClawAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the deleted agent.
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
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The number of automatically removed bindings.
     *
     * @example
     * 1
     */
    removedBindings?: number;
    /**
     * @remarks
     * **The request ID.**
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
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
