import * as $dara from '@darabonba/typescript';
export declare class CreateModelServiceResponseBody extends $dara.Model {
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
     * The request ID.
     *
     * @example
     * 69A85BAF-1089-4CDF-A82F-0A140F******
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the model service.
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
