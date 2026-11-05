import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterServerlessConfResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the serverless cluster.
     *
     * @example
     * pc-bp10gr51qasnl****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 5E71541A-6007-4DCC-A38A-F872C31FEB45
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
