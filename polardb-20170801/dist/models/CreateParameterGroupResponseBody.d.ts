import * as $dara from '@darabonba/typescript';
export declare class CreateParameterGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the parameter template.
     *
     * > You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to query the list of parameter templates in a region, including their IDs.
     *
     * @example
     * pcpg-**************
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 514D1D87-E243-4A5F-A87D-2785C3******
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
