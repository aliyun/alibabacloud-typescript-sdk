import * as $dara from '@darabonba/typescript';
export declare class CreateDBInstanceReplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 76364A52-E0AB-5CC8-9818-CF1DC482C092
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
