import * as $dara from '@darabonba/typescript';
export declare class DescribePolarAgentUserSessionsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * 01IC17MLISBB98SL345H7B5AES1E8VB1
     */
    sessionId?: string;
    /**
     * @remarks
     * The status of the session. Valid values:
     *
     * - **1**: Active
     *
     * - **0**: Closed
     *
     * @example
     * 1
     */
    sessionStatus?: number;
    /**
     * @remarks
     * The content.
     *
     * @example
     * content
     */
    title?: string;
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
export declare class DescribePolarAgentUserSessionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The result set.
     */
    data?: DescribePolarAgentUserSessionsResponseBodyData[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E2FDB684-751D-424D-98B9-704BEA******
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
