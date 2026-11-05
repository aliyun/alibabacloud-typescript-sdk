import * as $dara from '@darabonba/typescript';
export declare class ModifyHADiagnoseConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9EFA6DF3-5247-4D9D-80AA-68765BE6D5EA
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
