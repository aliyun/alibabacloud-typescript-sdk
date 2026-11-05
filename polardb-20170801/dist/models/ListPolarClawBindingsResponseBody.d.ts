import * as $dara from '@darabonba/typescript';
export declare class ListPolarClawBindingsResponseBodyBindings extends $dara.Model {
    /**
     * @remarks
     * The agent ID.
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
    /**
     * @remarks
     * The account ID.
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
export declare class ListPolarClawBindingsResponseBody extends $dara.Model {
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
     * The list of bindings.
     */
    bindings?: ListPolarClawBindingsResponseBodyBindings[];
    /**
     * @remarks
     * The status code.
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
     * The ID of the request.
     *
     * @example
     * 7F2007D3-7E74-4ECB-89A8-BF130D******
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
