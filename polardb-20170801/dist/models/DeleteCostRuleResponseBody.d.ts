import * as $dara from '@darabonba/typescript';
export declare class DeleteCostRuleResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of model API IDs affected by the deletion.
     *
     * @example
     * ["ma-2ze3x6i1d7g5rto28"]
     */
    affectedModelApiIds?: string[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the deletion was successful.
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
