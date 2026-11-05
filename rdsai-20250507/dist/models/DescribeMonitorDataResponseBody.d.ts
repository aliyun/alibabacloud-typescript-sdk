import * as $dara from '@darabonba/typescript';
export declare class DescribeMonitorDataResponseBodyDataValue extends $dara.Model {
    /**
     * @remarks
     * The point in time.
     *
     * @example
     * 1774972800
     */
    time?: string;
    /**
     * @remarks
     * The return value.
     *
     * @example
     * 60
     */
    value?: number;
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
export declare class DescribeMonitorDataResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The metric name.
     *
     * @example
     * qps
     */
    name?: string;
    /**
     * @remarks
     * The metric details.
     */
    value?: DescribeMonitorDataResponseBodyDataValue[];
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
export declare class DescribeMonitorDataResponseBody extends $dara.Model {
    /**
     * @remarks
     * The result.
     */
    data?: DescribeMonitorDataResponseBodyData[];
    /**
     * @remarks
     * The return message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
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
