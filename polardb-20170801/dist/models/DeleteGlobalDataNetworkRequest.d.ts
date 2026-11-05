import * as $dara from '@darabonba/typescript';
export declare class DeleteGlobalDataNetworkRequest extends $dara.Model {
    /**
     * @remarks
     * GDN ID
     *
     * @example
     * gdn-xxx
     */
    networkId?: string;
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
