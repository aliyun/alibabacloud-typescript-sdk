import * as $dara from '@darabonba/typescript';
export declare class EnableDBClusterServerlessResponseBody extends $dara.Model {
    /**
     * @remarks
     * The serverless cluster ID.
     *
     * @example
     * pc-bp10gr51qasnl****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The request ID.
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
