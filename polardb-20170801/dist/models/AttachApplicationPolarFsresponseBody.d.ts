import * as $dara from '@darabonba/typescript';
export declare class AttachApplicationPolarFSResponseBody extends $dara.Model {
    /**
     * @remarks
     * Application ID
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * PolarLakeBase instance ID
     *
     * @example
     * pcs-**************
     */
    polarFSInstanceId?: string;
    /**
     * @remarks
     * Request ID
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
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
