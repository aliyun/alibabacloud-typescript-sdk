import * as $dara from '@darabonba/typescript';
export declare class ModifyTaskInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * mst.errorcode.success.errormessage
     */
    errorCode?: string;
    /**
     * @remarks
     * The ID of the failed task. The ID is returned when a failure occurs.
     *
     * @example
     * t-83br18hlw11ue610yo
     */
    errorTaskId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 18B3000C-2B06-5D4F-AA5B-456D5FBCA55B
     */
    requestId?: string;
    /**
     * @remarks
     * The number of successful tasks.
     *
     * @example
     * 5
     */
    successCount?: string;
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
