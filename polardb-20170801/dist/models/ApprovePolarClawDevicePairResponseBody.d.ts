import * as $dara from '@darabonba/typescript';
export declare class ApprovePolarClawDevicePairResponseBodyDevice extends $dara.Model {
    /**
     * @remarks
     * The creation time of the device pairing in Unix milliseconds.
     *
     * @example
     * 1778662316663
     */
    createdAtMs?: number;
    /**
     * @remarks
     * The device family.
     *
     * @example
     * server
     */
    deviceFamily?: string;
    /**
     * @remarks
     * The unique identifier of the device.
     *
     * @example
     * device-l7rdl36iz6op66zf
     */
    deviceId?: string;
    /**
     * @remarks
     * The display name of the device.
     *
     * @example
     * test
     */
    displayName?: string;
    /**
     * @remarks
     * The operating system platform.
     *
     * @example
     * linux
     */
    platform?: string;
    /**
     * @remarks
     * The device role.
     *
     * @example
     * operator
     */
    role?: string;
    /**
     * @remarks
     * The list of permission scopes.
     */
    scopes?: string[];
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
export declare class ApprovePolarClawDevicePairResponseBody extends $dara.Model {
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
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The paired device information.
     */
    device?: ApprovePolarClawDevicePairResponseBodyDevice;
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
     * The pairing request ID.
     *
     * @example
     * req-abc-123
     */
    pairRequestId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 25C70FF3-D49B-594D-BECE-0DE2BA1D8BBB
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
