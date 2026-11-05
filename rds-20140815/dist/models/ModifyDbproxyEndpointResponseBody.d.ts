import * as $dara from '@darabonba/typescript';
export declare class ModifyDBProxyEndpointResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6B50D92C-1960-4D4F-A290-AFADD6B1A5C8
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
