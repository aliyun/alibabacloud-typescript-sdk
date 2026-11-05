import * as $dara from '@darabonba/typescript';
export declare class CreateGadInstanceMemberResponseBodyResult extends $dara.Model {
    /**
     * @remarks
     * The number of nodes created in this call.
     *
     * @example
     * 2
     */
    createCount?: string;
    /**
     * @remarks
     * The ID of the global active database cluster.
     *
     * @example
     * gad-rm-bp1npi2j8****
     */
    gadInstanceName?: string;
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
export declare class CreateGadInstanceMemberResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 16C62438-491B-5C02-9B49-BA924A1372A2
     */
    requestId?: string;
    /**
     * @remarks
     * The array of returned information.
     */
    result?: CreateGadInstanceMemberResponseBodyResult;
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
