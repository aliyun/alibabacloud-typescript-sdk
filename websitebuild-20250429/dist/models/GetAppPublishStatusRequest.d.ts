import * as $dara from '@darabonba/typescript';
export declare class GetAppPublishStatusRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * The deployment ticket ID.
     *
     * @example
     * 4998717
     */
    deployOrderId?: number;
    /**
     * @remarks
     * The website domain name.
     *
     * @example
     * www.aliyun.com
     */
    websiteDomain?: string;
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
