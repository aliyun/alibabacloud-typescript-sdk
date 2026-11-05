import * as $dara from '@darabonba/typescript';
export declare class DeleteRCInstancesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34
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
