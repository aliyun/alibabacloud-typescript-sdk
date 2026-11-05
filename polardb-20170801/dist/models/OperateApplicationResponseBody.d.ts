import * as $dara from '@darabonba/typescript';
export declare class OperateApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
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
