import * as $dara from '@darabonba/typescript';
export declare class AssociateEipAddressWithRCInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * EFFC7565-B3CF-5CFA-9E1F-164DD1E1F498
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
