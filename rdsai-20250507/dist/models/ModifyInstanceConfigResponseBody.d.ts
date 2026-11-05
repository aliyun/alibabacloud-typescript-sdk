import * as $dara from '@darabonba/typescript';
export declare class ModifyInstanceConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
    instanceName?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
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
