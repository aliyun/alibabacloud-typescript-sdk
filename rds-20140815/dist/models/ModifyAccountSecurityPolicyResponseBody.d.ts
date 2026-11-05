import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountSecurityPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * F2911788-25E8-42E5-A3A3-1B38D263F01E
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
