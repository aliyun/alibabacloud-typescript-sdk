import * as $dara from '@darabonba/typescript';
export declare class ModifyScheduleTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E56531A4-E552-40BA-9C58-137B80******
     */
    requestId?: string;
    /**
     * @remarks
     * The result of the request. Valid values:
     *
     * - **true**: The request was successful.
     *
     * - **false**: The request failed.
     *
     * @example
     * True
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
