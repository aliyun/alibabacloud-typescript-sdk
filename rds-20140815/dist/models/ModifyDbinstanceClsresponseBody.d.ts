import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceCLSResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2144F5CC-10C5-3B72-8C74-E5***********
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
