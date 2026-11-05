import * as $dara from '@darabonba/typescript';
export declare class StopDBInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A417FB41-A3D9-464E-AD0A-C7FE05C72E98
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
