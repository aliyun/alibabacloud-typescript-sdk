import * as $dara from '@darabonba/typescript';
export declare class DescribeLakebaseMountParameterGroupChangeLogsResponseBodyChangeLogs extends $dara.Model {
    /**
     * @remarks
     * The change type. Valid values: create, modify, and delete.
     *
     * @example
     * modify
     */
    changeType?: string;
    /**
     * @remarks
     * The creation time (UTC).
     *
     * @example
     * 2026-08-07T12:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The ID of the user who performed the operation.
     *
     * @example
     * 123456789
     */
    creator?: string;
    /**
     * @remarks
     * Indicates whether the change is applied. Valid values: 0: No. 1: Yes.
     *
     * @example
     * 1
     */
    isApply?: string;
    /**
     * @remarks
     * The modification time (UTC).
     *
     * @example
     * 2026-08-08T12:00:00Z
     */
    modifyTime?: string;
    /**
     * @remarks
     * The new value after the change. This value is empty if the change type is delete.
     *
     * @example
     * 2
     */
    newValue?: string;
    /**
     * @remarks
     * The old value before the change. This value is empty if the change type is create.
     *
     * @example
     * 1
     */
    oldValue?: string;
    /**
     * @remarks
     * The parameter name.
     *
     * @example
     * auto_increment_offset
     */
    parameterName?: string;
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
export declare class DescribeLakebaseMountParameterGroupChangeLogsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The change logs, sorted in descending order by CreateTime. An empty array is returned if no data is found.
     */
    changeLogs?: DescribeLakebaseMountParameterGroupChangeLogsResponseBodyChangeLogs[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F45FFACC-xxx
     */
    requestId?: string;
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
