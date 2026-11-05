import * as $dara from '@darabonba/typescript';
export declare class ModifyCronJobPolicyServerlessResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * D1401250-910B-57A6-8A6A-D9988A62B1CD
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
