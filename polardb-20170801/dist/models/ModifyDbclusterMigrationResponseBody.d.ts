import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterMigrationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * A1B303A5-653F-4AEE-A598-023FF9******
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
