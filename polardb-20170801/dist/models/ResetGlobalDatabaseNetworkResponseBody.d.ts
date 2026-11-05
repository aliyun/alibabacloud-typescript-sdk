import * as $dara from '@darabonba/typescript';
export declare class ResetGlobalDatabaseNetworkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 67F2E75F-AE67-4FB2-821F-A81237EACD15
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
