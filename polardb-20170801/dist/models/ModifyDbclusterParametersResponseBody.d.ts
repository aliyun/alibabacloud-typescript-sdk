import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterParametersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C5D526E5-91B5-48B8-B980-FE07FF******
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
