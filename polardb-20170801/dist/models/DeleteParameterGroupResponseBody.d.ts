import * as $dara from '@darabonba/typescript';
export declare class DeleteParameterGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4F7195E7-5F74-479D-AF59-1B4BF9******
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
