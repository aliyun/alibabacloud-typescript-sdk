import * as $dara from '@darabonba/typescript';
export declare class GetModelOperatorOrderResponseBodyDataInstanceList extends $dara.Model {
    /**
     * @remarks
     * The billing method of the instance.
     *
     * @example
     * PREPAY
     */
    chargeType?: string;
    /**
     * @remarks
     * The end time of the instance (format: timestamp).
     *
     * @example
     * 1775145600000
     */
    endTime?: number;
    /**
     * @remarks
     * The instance type.
     *
     * @example
     * xlarge
     */
    instanceClass?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * The start time of the instance (format: timestamp).
     *
     * @example
     * 1772439028000
     */
    startTime?: number;
    /**
     * @remarks
     * The instance status.
     *
     * @example
     * active/creating
     */
    status?: string;
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
export declare class GetModelOperatorOrderResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * Indicates whether a valid order exists.
     *
     * @example
     * true
     */
    hasValidOrder?: boolean;
    /**
     * @remarks
     * The instance list.
     */
    instanceList?: GetModelOperatorOrderResponseBodyDataInstanceList[];
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
export declare class GetModelOperatorOrderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The query result.
     */
    data?: GetModelOperatorOrderResponseBodyData;
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
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
