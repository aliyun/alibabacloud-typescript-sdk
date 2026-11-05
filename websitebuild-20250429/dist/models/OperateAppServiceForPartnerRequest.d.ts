import * as $dara from '@darabonba/typescript';
export declare class OperateAppServiceForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS00001
     */
    bizId?: string;
    /**
     * @remarks
     * Other extended information in JSON format for future parameter expansion.
     *
     * @example
     * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
     */
    extend?: string;
    /**
     * @remarks
     * The operation event. Valid values:
     * SERVICE_FINISH: the service is completed.
     *
     * @example
     * SERVICE_FINISH
     */
    operateEvent?: string;
    /**
     * @remarks
     * The service type.
     *
     * Valid values:
     *
     * - private: deployment under the user account.
     *
     * - managed: hosted under the service provider account.
     *
     * - operation: Alibaba Cloud Managed Services.
     *
     * @example
     * WEBSITE_DESIGN
     */
    serviceType?: string;
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
