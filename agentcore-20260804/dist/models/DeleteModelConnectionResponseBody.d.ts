import * as $dara from '@darabonba/typescript';
export declare class DeleteModelConnectionResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The model connection ID.
     *
     * @example
     * mc-1
     */
    connectionId?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1
     */
    workspaceId?: string;
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
export declare class DeleteModelConnectionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value SUCCESS indicates success.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The identifier of the model connection that has been accepted for deletion.
     */
    data?: DeleteModelConnectionResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value 200 indicates success.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request processing result message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * request-1
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     */
    success?: boolean;
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
