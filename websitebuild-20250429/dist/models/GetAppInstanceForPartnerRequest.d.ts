import * as $dara from '@darabonba/typescript';
export declare class GetAppInstanceForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
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
