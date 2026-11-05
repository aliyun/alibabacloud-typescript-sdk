import * as $dara from '@darabonba/typescript';
export declare class RemoveRCInstancesFromDeploymentSetResponseBodyResults extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rc-w9htiydssds
     */
    RCInstanceId?: string;
    /**
     * @remarks
     * The status of the node. Valid values:
     * * **Success**: Successful.
     * * **Failed**: Failed.
     *
     * @example
     * Success
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
export declare class RemoveRCInstancesFromDeploymentSetResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * C816A4BF-A6EC-4722-95F9-2055859CCFD2
     */
    requestId?: string;
    /**
     * @remarks
     * The results of the API call.
     */
    results?: RemoveRCInstancesFromDeploymentSetResponseBodyResults[];
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
