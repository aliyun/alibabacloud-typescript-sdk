import * as $dara from '@darabonba/typescript';
export declare class CreateLakebaseMountParameterGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the created parameter template.
     *
     * @example
     * pcpg-lakebase-xxx
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F45FFACC-xxx
     */
    requestId?: string;
    /**
     * @remarks
     * The asynchronous task ID.
     *
     * @example
     * 123456
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
