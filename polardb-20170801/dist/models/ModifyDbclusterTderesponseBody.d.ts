import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterTDEResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 5F859238-2A36-4A8D-BD0F-732112******
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
