import * as $dara from '@darabonba/typescript';
export declare class DisablePolarClawCronJobResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
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
     * The ID of the disabled job.
     *
     * @example
     * 0ee00f56-f467-4d41-858c-ca4ede2c770e
     */
    jobId?: string;
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
     * Indicates whether the operation was successful. A value of `true` indicates success.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * The ID of the request.
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
