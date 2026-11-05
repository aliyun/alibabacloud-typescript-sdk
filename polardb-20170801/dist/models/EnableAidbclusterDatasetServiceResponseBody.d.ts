import * as $dara from '@darabonba/typescript';
export declare class EnableAIDBClusterDatasetServiceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the dataset management service.
     *
     * @example
     * pcs-2ze26***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * C890995A-CF06-4F4D-8DB8-DD26C2******
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
