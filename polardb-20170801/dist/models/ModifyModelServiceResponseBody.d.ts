import * as $dara from '@darabonba/typescript';
export declare class ModifyModelServiceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The model service ID.
     *
     * @example
     * ms-xxxxxx
     */
    modelServiceId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
     */
    requestId?: string;
    /**
     * @remarks
     * The model service status.
     *
     * @example
     * Enable
     */
    status?: string;
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
