import * as $dara from '@darabonba/typescript';
export declare class CreateInspectionTaskResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The inspection task ID.
     *
     * @example
     * 9adf8567-b619-4d37-8ff2-01d38a76****
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
export declare class CreateInspectionTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The result.
     */
    data?: CreateInspectionTaskResponseBodyData;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * Task created successfully
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
