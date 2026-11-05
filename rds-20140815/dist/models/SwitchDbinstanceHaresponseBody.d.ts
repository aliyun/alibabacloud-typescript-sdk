import * as $dara from '@darabonba/typescript';
export declare class SwitchDBInstanceHAResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
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
