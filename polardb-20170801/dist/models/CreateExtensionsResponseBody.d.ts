import * as $dara from '@darabonba/typescript';
export declare class CreateExtensionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 86627CF4-CBB6-531E-BBDA-7B6DD5C42E85
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
