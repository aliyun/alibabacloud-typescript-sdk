import * as $dara from '@darabonba/typescript';
export declare class DescribePolarAgentSessionStatusResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the session. Valid values:
     *
     * - **1**: Enabled
     *
     * - **0**: Disabled
     *
     * @example
     * 1
     */
    status?: number;
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
