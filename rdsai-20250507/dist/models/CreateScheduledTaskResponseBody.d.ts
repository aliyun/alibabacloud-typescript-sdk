import * as $dara from '@darabonba/typescript';
export declare class CreateScheduledTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response message.
     *
     * @example
     * Scheduled inspection task created successfully
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D984FD38-6C2D-55DF-B0D7-8BCAC2E1F8C2
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the scheduled inspection configuration.
     *
     * @example
     * 847268a4-196f-416b-aa12-bfe0c115****
     */
    scheduledId?: string;
    /**
     * @remarks
     * The request result.
     *
     * @example
     * true
     */
    success?: boolean;
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
