import * as $dara from '@darabonba/typescript';
export declare class RestartPolarClawGatewayResponseBody extends $dara.Model {
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
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The approximate downtime of this restart, in milliseconds. This value is returned synchronously.
     *
     * @example
     * 3235
     */
    downtimeMs?: number;
    /**
     * @remarks
     * The gateway version after the restart. This value is returned synchronously.
     *
     * @example
     * 2026.5.7
     */
    gatewayVersion?: string;
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
     * The actual restart mode used.
     *
     * @example
     * in-process
     */
    mode?: string;
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
     * The operation name. This value is returned when Async is set to true.
     *
     * @example
     * RestartPolarClawGateway
     */
    operation?: string;
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
     * Indicates whether the gateway is confirmed available after the restart. This value is returned synchronously.
     *
     * @example
     * true
     */
    restarted?: boolean;
    /**
     * @remarks
     * The initial state of the asynchronous task. This value is returned when Async is set to true.
     *
     * @example
     * pending
     */
    state?: string;
    /**
     * @remarks
     * The asynchronous task ID. This value is returned when Async is set to true. You can poll the task status by calling DescribePolarClawTask.
     *
     * @example
     * 0ee00f56-f467-4d41-858c-ca4ede2c770e
     */
    taskId?: string;
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
