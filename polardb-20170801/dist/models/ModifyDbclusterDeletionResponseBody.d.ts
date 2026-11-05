import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterDeletionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 24C80BD8-C710-4138-893A-D2AFED4FC13D
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
