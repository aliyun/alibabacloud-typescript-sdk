import * as $dara from '@darabonba/typescript';
export declare class CreateNetworkChannelResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * F9F1CB1A-B1D5-4EF5-A53A-************
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
