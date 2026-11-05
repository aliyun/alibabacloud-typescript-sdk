import * as $dara from '@darabonba/typescript';
export declare class CheckServiceLinkedRoleResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether a service-linked role has been created.
     *
     * @example
     * true
     */
    hasServiceLinkedRole?: boolean;
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
