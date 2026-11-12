import * as $dara from '@darabonba/typescript';
export declare class RemovePolarClawDevicePairResponseBody extends $dara.Model {
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
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The unique identifier of the device.
     *
     * @example
     * device-mac-789
     */
    deviceId?: string;
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
     * The request ID.
     *
     * @example
     * 580EF224-9647-59E7-9950-D9EBFD6A2921
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
