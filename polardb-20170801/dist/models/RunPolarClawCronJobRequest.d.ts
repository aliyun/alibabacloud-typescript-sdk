import * as $dara from '@darabonba/typescript';
export declare class RunPolarClawCronJobRequest extends $dara.Model {
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
     * The ID of the scheduled task to execute.
     *
     * This parameter is required.
     *
     * @example
     * 0ee00f56-f467-4d41-858c-ca4ede2c770e
     */
    jobId?: string;
    /**
     * @remarks
     * The execution mode. Valid values: force and due. Default value: force.
     *
     * @example
     * force
     */
    mode?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after creation. Default value: true.
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
