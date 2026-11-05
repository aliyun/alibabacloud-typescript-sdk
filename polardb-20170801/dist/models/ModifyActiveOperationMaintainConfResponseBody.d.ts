import * as $dara from '@darabonba/typescript';
export declare class ModifyActiveOperationMaintainConfResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1CC9CB4B-BBAF-5963-9545-A8DE9FFC7DFB
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
