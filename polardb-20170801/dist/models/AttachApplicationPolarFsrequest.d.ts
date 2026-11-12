import * as $dara from '@darabonba/typescript';
export declare class AttachApplicationPolarFSRequest extends $dara.Model {
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
     * The AccessKey ID of the Alibaba Cloud account or RAM user. Ensure that the account or RAM user is authorized when you create the Polarlakebase instance.
     *
     * @example
     * LT**********************
     */
    polarFSAccessKeyId?: string;
    /**
     * @remarks
     * The AccessKey secret of the Alibaba Cloud account or RAM user.
     *
     * @example
     * H3****************************
     */
    polarFSAccessKeySecret?: string;
    /**
     * @remarks
     * The instance ID of the Polarlakebase cold storage instance.
     *
     * Currently, only the following applications support cold storage instances:
     * - supabase
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
