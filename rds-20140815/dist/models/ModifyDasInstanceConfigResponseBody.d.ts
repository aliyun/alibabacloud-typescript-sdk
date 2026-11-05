import * as $dara from '@darabonba/typescript';
export declare class ModifyDasInstanceConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * C3C247D4-1643-4C5D-87C2-C829543FC626
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
