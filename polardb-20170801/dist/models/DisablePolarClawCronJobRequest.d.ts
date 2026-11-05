import * as $dara from '@darabonba/typescript';
export declare class DisablePolarClawCronJobRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the cron job to disable.
     *
     * This parameter is required.
     *
     * @example
     * 0ee00f56-f467-4d41-858c-ca4ede2c770e
     */
    jobId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the job is disabled. The default value is `true`.
     *
     * @example
     * true
     */
    restart?: boolean;
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
