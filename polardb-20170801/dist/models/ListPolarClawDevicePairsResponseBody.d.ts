import * as $dara from '@darabonba/typescript';
export declare class ListPolarClawDevicePairsResponseBodyPaired extends $dara.Model {
    /**
     * @remarks
     * The client identifier.
     *
     * @example
     * cli
     */
    clientId?: string;
    /**
     * @remarks
     * The client mode.
     *
     * @example
     * cli
     */
    clientMode?: string;
    /**
     * @remarks
     * The creation time of the device pairing in Unix milliseconds.
     *
     * @example
     * 1778659807727
     */
    createdAtMs?: number;
    /**
     * @remarks
     * The hardware category.
     *
     * @example
     * empty
     */
    deviceFamily?: string;
    /**
     * @remarks
     * The unique identifier of the device.
     *
     * @example
     * f92620d6bea04f65d48cf603c57b367c97e837c1ab9f6d78f741f477e99d857c
     */
    deviceId?: string;
    /**
     * @remarks
     * The display name of the device.
     *
     * @example
     * empty
     */
    displayName?: string;
    /**
     * @remarks
     * The last active time of the device in Unix milliseconds.
     *
     * @example
     * 1778659807727
     */
    lastSeenAtMs?: number;
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
export declare class ListPolarClawDevicePairsResponseBodyPending extends $dara.Model {
    /**
     * @remarks
     * The client identifier.
     *
     * @example
     * cli
     */
    clientId?: string;
    /**
     * @remarks
     * The client mode.
     *
     * @example
     * cli
     */
    clientMode?: string;
    /**
     * @remarks
     * The hardware category.
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
     * device-784x37k0vko734fk
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
     * Specifies whether the request is for re-pairing.
     *
     * @example
     * false
     */
    isRepair?: boolean;
    /**
     * @remarks
     * The pairing request ID.
     *
     * @example
     * test-1778647932986
     */
    pairRequestId?: string;
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
     * The Ed25519 public key.
     *
     * @example
     * test-pubkey-base64url
     */
    publicKey?: string;
    /**
     * @remarks
     * The IP address of the requester.
     *
     * @example
     * 127.0.0.1
     */
    remoteIp?: string;
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
     * The list of roles.
     */
    roles?: string[];
    /**
     * @remarks
     * The list of permission scopes.
     */
    scopes?: string[];
    /**
     * @remarks
     * Specifies whether silent pairing is enabled.
     *
     * @example
     * false
     */
    silent?: boolean;
    /**
     * @remarks
     * The timestamp of the pairing request in Unix milliseconds.
     *
     * @example
     * 1778660347550
     */
    ts?: number;
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
export declare class ListPolarClawDevicePairsResponseBody extends $dara.Model {
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
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The list of paired devices.
     */
    paired?: ListPolarClawDevicePairsResponseBodyPaired[];
    /**
     * @remarks
     * The list of pending pairing requests.
     */
    pending?: ListPolarClawDevicePairsResponseBodyPending[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
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
