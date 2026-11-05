import * as $dara from '@darabonba/typescript';
export declare class CheckRdsCustomInitResponseBody extends $dara.Model {
    /**
     * @example
     * true
     */
    hasServiceLinkedRole?: string;
    registerUidSuccess?: boolean;
    /**
     * @example
     * B4CAF581-2AC7-41AD-8940-D56DF7AA****
     */
    requestId?: string;
    /**
     * @example
     * true
     */
    requireServiceLinkedRole?: string;
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
