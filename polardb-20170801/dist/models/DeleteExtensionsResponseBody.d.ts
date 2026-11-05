import * as $dara from '@darabonba/typescript';
export declare class DeleteExtensionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 11EB8492-C17F-5FC2-9E27-1440A5C2F583
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
