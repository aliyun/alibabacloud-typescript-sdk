import * as $dara from '@darabonba/typescript';
export declare class DescribeCommonSandboxTemplatesRequest extends $dara.Model {
    /**
     * @remarks
     * A reserved parameter. You do not need to specify this parameter.
     *
     * @example
     * None
     */
    maxResults?: number;
    /**
     * @remarks
     * The token that determines the start point of the query. Set this parameter to empty to start the query from the beginning.
     *
     * @example
     * AAAAAc3HCuYhJi/wvpk4xOr0VLYz/NvD85HpgBeRBCusEIeVQ0dHZH9jr+NP3X9Jx0iSoql55b9nd4PIDm252/a0f+U=
     */
    nextToken?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
