import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterMonitorResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 75B92353-73B4-447B-8477-C85F3C******
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
