import * as $dara from '@darabonba/typescript';
export declare class DeleteAppDomainRedirectRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * aliyun.com
     *
     * @example
     * www.aliyun.com
     */
    domainName?: string;
    /**
     * @remarks
     * The ID of the domain name redirect record.
     *
     * @example
     * 803858889404426240
     */
    recordId?: number;
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
