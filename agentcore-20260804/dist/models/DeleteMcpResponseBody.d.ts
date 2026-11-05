import * as $dara from '@darabonba/typescript';
export declare class DeleteMcpResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * Success
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * The request is processed successfully
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
