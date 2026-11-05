import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceDescriptionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 17F57FEE-EA4F-4337-8D2E-9C23CAA63D74
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
