import * as $dara from '@darabonba/typescript';
export declare class ModifyDbProxyInstanceSslResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * BF46A62B-3717-4397-9338-36BB95C898B3
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
