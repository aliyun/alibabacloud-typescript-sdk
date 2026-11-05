import * as $dara from '@darabonba/typescript';
export declare class MigrateConnectionToOtherZoneResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * InvalidParam
     */
    code?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * Invalid Parameter.
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 65BDA532-28AF-4122-AA39-B382721EEE64
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
