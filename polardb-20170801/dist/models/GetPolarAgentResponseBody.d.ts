import * as $dara from '@darabonba/typescript';
export declare class GetPolarAgentResponseBodyFunctionCall extends $dara.Model {
    /**
     * @remarks
     * The operation-related output result.
     *
     * @example
     * ---narguments:n  parameters: []n
     */
    arguments?: string;
    /**
     * @remarks
     * The quota ID.
     *
     * @example
     * 393
     */
    id?: string;
    /**
     * @remarks
     * The rule name.
     *
     * @example
     * rule04
     */
    name?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * xxx
     */
    status?: string;
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
export declare class GetPolarAgentResponseBodyUiFunctionCall extends $dara.Model {
    /**
     * @remarks
     * xxx
     *
     * @example
     * xxx
     */
    argsText?: string;
    /**
     * @remarks
     * The tool command that is invoked.
     *
     * @example
     * xxx
     */
    toolName?: string;
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
export declare class GetPolarAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * QZ-13661677-80
     */
    content?: string;
    /**
     * @remarks
     * Indicates whether FunctionCall is supported.
     */
    functionCall?: GetPolarAgentResponseBodyFunctionCall[];
    /**
     * @remarks
     * The cloud product type.
     *
     * @example
     * polardb
     */
    product?: string;
    /**
     * @remarks
     * The ID of the user query pipeline task.
     *
     * @example
     * 2548026401648157601743560466154
     */
    queryId?: string;
    /**
     * @remarks
     * The model\\"s reasoning content.
     *
     * @example
     * xxxx
     */
    reasoningContent?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 34458CD3-33E0-4624-BFEF-840C15******
     */
    requestId?: string;
    /**
     * @remarks
     * The session ID for code execution.
     *
     * @example
     * 40315d708f0806903b08813bf4c9db2e
     */
    sessionId?: string;
    /**
     * @remarks
     * Indicates whether UiFunctionCall is supported.
     */
    uiFunctionCall?: GetPolarAgentResponseBodyUiFunctionCall[];
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
