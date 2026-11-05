import * as $dara from '@darabonba/typescript';
export declare class CreateServiceLinkedRoleResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3F9E6A3B-C13E-4064-A010-18582A******
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
