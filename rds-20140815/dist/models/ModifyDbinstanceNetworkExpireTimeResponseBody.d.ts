import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceNetworkExpireTimeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4C467B38-3910-447D-87BC-AC049166F216
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
