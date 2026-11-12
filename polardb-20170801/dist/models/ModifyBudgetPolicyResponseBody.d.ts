import * as $dara from '@darabonba/typescript';
export declare class ModifyBudgetPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the gateway instance.
     *
     * @example
     * pg-xxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
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
