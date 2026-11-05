import * as $dara from '@darabonba/typescript';
export declare class DeleteModelApiResponseBody extends $dara.Model {
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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
