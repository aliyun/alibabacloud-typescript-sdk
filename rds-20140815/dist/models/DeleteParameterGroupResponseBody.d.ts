import * as $dara from '@darabonba/typescript';
export declare class DeleteParameterGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The parameter template ID.
     *
     * @example
     * rpg-gfs****
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8AF26036-B254-4212-B8E4-EFBE818B7FD6
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
