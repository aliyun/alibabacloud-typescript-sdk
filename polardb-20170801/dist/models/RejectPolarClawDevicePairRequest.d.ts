import * as $dara from '@darabonba/typescript';
export declare class RejectPolarClawDevicePairRequest extends $dara.Model {
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
     * The pairing request ID.
     *
     * This parameter is required.
     *
     * @example
     * req-abc-123
     */
    pairRequestId?: string;
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
