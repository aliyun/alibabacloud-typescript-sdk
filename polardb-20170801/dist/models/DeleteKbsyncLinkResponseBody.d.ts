import * as $dara from '@darabonba/typescript';
export declare class DeleteKBSyncLinkResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 69A85BAF-1089-4CDF-A82F-0A140F******
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
