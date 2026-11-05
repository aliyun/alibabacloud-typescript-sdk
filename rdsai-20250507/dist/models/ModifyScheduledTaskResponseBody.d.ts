import * as $dara from '@darabonba/typescript';
export declare class ModifyScheduledTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response message.
     *
     * @example
     * Scheduled task updated successfully
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
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
