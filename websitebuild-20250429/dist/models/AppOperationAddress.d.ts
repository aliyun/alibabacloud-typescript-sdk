import * as $dara from '@darabonba/typescript';
import { AppOperateAction } from "./AppOperateAction";
export declare class AppOperationAddress extends $dara.Model {
    /**
     * @remarks
     * The action button list.
     */
    actions?: AppOperateAction[];
    /**
     * @remarks
     * The customer service design URL.
     */
    aiCustomerConfigUrl?: string;
    /**
     * @remarks
     * The AI design URL.
     */
    aiDesignUrl?: string;
    /**
     * @remarks
     * The application publishing URL.
     *
     * @example
     * https://abcd.scd.wanwang.xin
     */
    appPublishUrl?: string;
    /**
     * @remarks
     * The overview page action button list.
     */
    dashboardActions?: AppOperateAction[];
    /**
     * @remarks
     * The professional design URL.
     *
     * @example
     * https://zero.msea.aliyun.com/forward/v1/website/websiteLogin?bizId=WS20250915163734000001&callBackUrl=/Designer/index
     */
    designUrl?: string;
    /**
     * @remarks
     * The application instance logon URL.
     *
     * @example
     * https://zero.msea.aliyun.com/forward/v1/website/websiteLogin?bizId=WS20250915163734000001&callBackUrl=/Admin/SiteAdmin/Index
     */
    instanceLoginUrl?: string;
    /**
     * @remarks
     * The renewal purchase URL.
     *
     * @example
     * https://common-buy.aliyun.com/?orderType=RENEW&commodityCode=domain_website_public_cn&instanceId=12313213
     */
    renewBuyUrl?: string;
    /**
     * @remarks
     * The service delivery URL.
     *
     * @example
     * https://zero.msea.aliyun.com/forward/v1/website/websiteLogin?bizId=WS20250915163734000001&callBackUrl=/Admin/SiteAdmin/Index
     */
    serverDeliveryUrl?: string;
    /**
     * @remarks
     * The upgrade purchase URL.
     *
     * @example
     * https://common-buy.aliyun.com/?orderType=UPGRADE&commodityCode=domain_website_public_cn&instanceId=12313213
     */
    upgradeBuyUrl?: string;
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
