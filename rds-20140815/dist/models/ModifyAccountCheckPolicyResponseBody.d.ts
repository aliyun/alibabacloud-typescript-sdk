import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountCheckPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 866F5EB8-4650-4061-87F0-379F6F968BCE
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
