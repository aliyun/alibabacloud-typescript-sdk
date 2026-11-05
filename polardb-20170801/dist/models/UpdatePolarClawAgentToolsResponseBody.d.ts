import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawAgentToolsResponseBodyTools extends $dara.Model {
    /**
     * @remarks
     * The list of explicitly allowed tools.
     */
    allow?: string[];
    /**
     * @remarks
     * The list of additionally allowed tools.
     */
    alsoAllow?: string[];
    /**
     * @remarks
     * The list of denied tools.
     */
    deny?: string[];
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
export declare class UpdatePolarClawAgentToolsResponseBody extends $dara.Model {
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
     * success
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation was successful.
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
     * The updated tool configuration.
     */
    tools?: UpdatePolarClawAgentToolsResponseBodyTools;
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
