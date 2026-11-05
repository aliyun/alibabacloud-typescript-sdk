import * as $dara from '@darabonba/typescript';
export declare class UpgradeDBClusterVersionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * CAE6755F-B79A-4861-B227-801FE8******
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
