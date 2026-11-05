import * as $dara from '@darabonba/typescript';
export declare class UpgradeDBProxyInstanceKernelVersionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the database proxy.
     *
     * @example
     * bu9****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 44537EC8-DFA2-4745-B579-E733FF2C5B9A
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 334362871
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
