import * as $dara from '@darabonba/typescript';
export declare class RemovePolarClawDevicePairRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the paired device to remove. You can call ListPolarClawDevicePairs and obtain the DeviceId from the returned Paired list.
     *
     * This parameter is required.
     *
     * @example
     * device-mac-789
     */
    deviceId?: string;
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
