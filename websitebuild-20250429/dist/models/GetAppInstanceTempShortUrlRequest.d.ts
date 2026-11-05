import * as $dara from '@darabonba/typescript';
export declare class GetAppInstanceTempShortUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The application business ID.
     *
     * @example
     * WD20250703155602000001
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
