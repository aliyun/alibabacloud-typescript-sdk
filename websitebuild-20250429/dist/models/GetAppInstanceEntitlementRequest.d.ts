import * as $dara from '@darabonba/typescript';
export declare class GetAppInstanceEntitlementRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250814102215000001
     */
    bizId?: string;
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
