import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceReplicationSwitchResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE
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
