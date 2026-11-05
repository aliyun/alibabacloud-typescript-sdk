import * as $dara from '@darabonba/typescript';
export declare class CreateCostRuleResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the cost rule.
     *
     * @example
     * 924d450014e64e88ac6e8486f8e990**
     */
    costRuleId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 580EF224-9647-59E7-9950-D9EBFD6A2921
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
