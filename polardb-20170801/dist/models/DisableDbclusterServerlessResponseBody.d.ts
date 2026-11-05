import * as $dara from '@darabonba/typescript';
export declare class DisableDBClusterServerlessResponseBody extends $dara.Model {
    /**
     * @remarks
     * The serverless cluster ID.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
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
