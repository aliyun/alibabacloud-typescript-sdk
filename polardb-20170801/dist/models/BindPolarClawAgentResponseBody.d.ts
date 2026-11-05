import * as $dara from '@darabonba/typescript';
export declare class BindPolarClawAgentResponseBodyBinding extends $dara.Model {
    /**
     * @remarks
     * The account ID.
     *
     * @example
     * default
     */
    accountId?: string;
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
     * The channel ID.
     *
     * @example
     * feishu
     */
    channel?: string;
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
export declare class BindPolarClawAgentResponseBody extends $dara.Model {
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
     * The details of the newly created association.
     */
    binding?: BindPolarClawAgentResponseBodyBinding;
    /**
     * @remarks
     * 200
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * successful
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of global associations after the operation.
     *
     * @example
     * 1
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
