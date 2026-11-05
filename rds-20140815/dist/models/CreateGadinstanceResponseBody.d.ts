import * as $dara from '@darabonba/typescript';
export declare class CreateGADInstanceResponseBodyResult extends $dara.Model {
    /**
     * @remarks
     * The number of nodes created by this call.
     *
     * @example
     * 2
     */
    createMemberCount?: string;
    /**
     * @remarks
     * The ID of the global active database cluster.
     *
     * @example
     * gad-rm-bp1npi2j8****
     */
    gadInstanceName?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 5374****
     */
    taskID?: string;
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
export declare class CreateGADInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE
     */
    requestId?: string;
    /**
     * @remarks
     * The array of returned information.
     */
    result?: CreateGADInstanceResponseBodyResult;
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
