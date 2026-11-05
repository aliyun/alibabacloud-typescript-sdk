import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountLockStateResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B762E8C5-0129-51DB-80C8-********
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
