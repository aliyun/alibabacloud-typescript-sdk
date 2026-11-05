import * as $dara from '@darabonba/typescript';
export declare class UnbindPolarClawAgentResponseBody extends $dara.Model {
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
     * pa-********************
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
     * The actual number of bindings removed.
     *
     * @example
     * 1
     */
    removedCount?: number;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 24A1990B-4F6E-482B-B8CB-75C612******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of global bindings after the operation.
     *
     * @example
     * 0
     */
    totalBindings?: number;
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
