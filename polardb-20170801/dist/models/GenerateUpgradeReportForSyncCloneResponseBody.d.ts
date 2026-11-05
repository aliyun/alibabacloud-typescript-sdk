import * as $dara from '@darabonba/typescript';
export declare class GenerateUpgradeReportForSyncCloneResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The source instance ID.
     *
     * @example
     * pc-k2j96w169uhu868l8
     */
    sourceDBClusterId?: string;
    /**
     * @remarks
     * The ID of the asynchronous task.
     *
     * @example
     * 2312111
     */
    taskId?: number;
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
