import * as $dara from '@darabonba/typescript';
export declare class CreateParameterGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The parameter template ID. You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/144491.html) operation to query the parameter template ID.
     *
     * @example
     * rpg-q488w14xvsk****
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1
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
