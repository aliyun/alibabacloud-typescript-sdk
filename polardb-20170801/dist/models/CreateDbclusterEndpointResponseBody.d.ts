import * as $dara from '@darabonba/typescript';
export declare class CreateDBClusterEndpointResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CD35F3-F3-44CA-AFFF-BAF869******
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
