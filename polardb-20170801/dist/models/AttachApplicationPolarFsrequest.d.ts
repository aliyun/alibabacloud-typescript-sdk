import * as $dara from '@darabonba/typescript';
export declare class AttachApplicationPolarFSRequest extends $dara.Model {
    /**
     * @remarks
     * Application ID
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * AccessKey ID of the Alibaba Cloud account or RAM user. Ensure that you granted permissions to this account or user when you created the PolarLakeBase instance.
     *
     * @example
     * LT**********************
     */
    polarFSAccessKeyId?: string;
    /**
     * @remarks
     * AccessKey secret of the Alibaba Cloud account or RAM user
     *
     * @example
     * H3****************************
     */
    polarFSAccessKeySecret?: string;
    /**
     * @remarks
     * PolarLakeBase cold-storage instance ID
     *
     * Only the following applications support cold-storage instances:
     *
     * - Supabase
     *
     * This parameter is required.
     *
     * @example
     * pcs-**************
     */
    polarFSInstanceId?: string;
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
