import * as $dara from '@darabonba/typescript';
export declare class RdsCustomInitResponseBody extends $dara.Model {
    registerUidSuccess?: boolean;
    /**
     * @example
     * B4CAF581-2AC7-41AD-8940-D56DF7AA****
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
