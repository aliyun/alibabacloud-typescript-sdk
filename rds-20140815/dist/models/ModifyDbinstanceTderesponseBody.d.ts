import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceTDEResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 777C4593-8053-427B-99E2-105593277CAB
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
