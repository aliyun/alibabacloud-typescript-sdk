import * as $dara from '@darabonba/typescript';
export declare class DescribeImportTaskValidationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The task details.
     *
     * @example
     * {"ValidateAction": "Detail"}
     */
    detail?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 3E36DB6E-AE3B-53B6-A703-85F883FD1B2C
     */
    requestId?: string;
    /**
     * @remarks
     * The task status. This parameter is invalid.
     *
     * @example
     * COMPLETED
     */
    status?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. Valid values:
     *
     * - **true**: The request is successful.
     * - **false**: The request failed.
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
