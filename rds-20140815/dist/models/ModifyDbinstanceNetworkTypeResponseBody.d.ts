import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceNetworkTypeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The endpoint of the instance.
     *
     * @example
     * rm-bp1****.mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 1025486523574
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
