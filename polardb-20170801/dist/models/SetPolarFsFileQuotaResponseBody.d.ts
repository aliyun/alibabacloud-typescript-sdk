import * as $dara from '@darabonba/typescript';
export declare class SetPolarFsFileQuotaResponseBody extends $dara.Model {
    /**
     * @remarks
     * The Polarlakebase instance ID.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
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
