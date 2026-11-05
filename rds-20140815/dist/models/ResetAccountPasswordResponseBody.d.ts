import * as $dara from '@darabonba/typescript';
export declare class ResetAccountPasswordResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD
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
