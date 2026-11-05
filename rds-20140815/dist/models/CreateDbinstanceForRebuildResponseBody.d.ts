import * as $dara from '@darabonba/typescript';
export declare class CreateDBInstanceForRebuildResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 20793850608****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 417450000
     */
    taskId?: string;
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
