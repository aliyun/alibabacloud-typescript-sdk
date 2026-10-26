// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppInstanceProfileIndependentDeployment extends $dara.Model {
  /**
   * @remarks
   * Specifies whether a retry is allowed after the dedicated server fails to start.
   */
  canRetry?: boolean;
  /**
   * @remarks
   * The deployment region code of the dedicated server.
   * 
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @remarks
   * The DNS record type used when binding a domain name to the dedicated IP address.
   * 
   * @example
   * A
   */
  dnsRecordType?: string;
  /**
   * @remarks
   * The eligibility status of the dedicated server. Valid values:
   * - UPGRADE_REQUIRED: A version upgrade is required.
   * - AVAILABLE: The dedicated server can be started.
   * - UNAVAILABLE: The dedicated server is currently unavailable.
   * 
   * @example
   * AVAILABLE
   */
  eligibility?: string;
  /**
   * @remarks
   * The status of the dedicated server. Valid values:
   * - NOT_ENABLED: Not started.
   * - ENABLING: Starting.
   * - ACTIVE: Started.
   * - FAILED: Failed to start.
   * 
   * @example
   * ACTIVE
   */
  enableStatus?: string;
  /**
   * @remarks
   * The dedicated IP address assigned after the dedicated server is started.
   * 
   * @example
   * 203.0.113.10
   */
  independentIp?: string;
  /**
   * @remarks
   * The display specification of the dedicated server. This does not represent the real-time resource usage of the container.
   * 
   * @example
   * 2 vCPUs 2 GB
   */
  serverSpec?: string;
  /**
   * @remarks
   * The task ID for starting the dedicated server.
   * 
   * @example
   * 17
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      canRetry: 'CanRetry',
      deployArea: 'DeployArea',
      dnsRecordType: 'DnsRecordType',
      eligibility: 'Eligibility',
      enableStatus: 'EnableStatus',
      independentIp: 'IndependentIp',
      serverSpec: 'ServerSpec',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRetry: 'boolean',
      deployArea: 'string',
      dnsRecordType: 'string',
      eligibility: 'string',
      enableStatus: 'string',
      independentIp: 'string',
      serverSpec: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstanceProfile extends $dara.Model {
  /**
   * @remarks
   * The application type code. For example, PC_WebSite indicates a PC website.
   * 
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @remarks
   * The display name of the application type.
   * 
   * @example
   * PC Website
   */
  applicationTypeText?: string;
  /**
   * @remarks
   * The business identifier of the application instance.
   * 
   * @example
   * WS_SITE_1
   */
  bizId?: string;
  /**
   * @remarks
   * The audit status.
   * 
   * @example
   * 1
   */
  caseAuditStatus?: string;
  /**
   * @remarks
   * The listing status.
   * 
   * @example
   * online
   */
  caseShelfStatus?: string;
  /**
   * @remarks
   * The ID of the ChatBI BuildSchemaIndex asynchronous task.
   * 
   * @example
   * task-1
   */
  chatbiTaskId?: string;
  /**
   * @remarks
   * The status of the ChatBI BuildSchemaIndex task. Valid values: running, finish, and failed.
   * 
   * @example
   * finish
   */
  chatbiTaskStatus?: string;
  /**
   * @remarks
   * The commodity code used when placing the order.
   * 
   * @example
   * domain_website_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The customer service contact information or description.
   * 
   * @example
   * support@example.com
   */
  customerService?: string;
  /**
   * @remarks
   * The deployment region code of the application.
   * 
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @remarks
   * The ICP filing number bound to the custom domain name. Multiple filing numbers are separated by commas (,).
   * 
   * @example
   * 京ICP备12345678号-1
   */
  icpbaNo?: string;
  /**
   * @remarks
   * The dedicated server information. This field is computed in real time by DescribeAppInstance and is not populated in list API responses.
   */
  independentDeployment?: AppInstanceProfileIndependentDeployment;
  /**
   * @remarks
   * The ID of the associated Lingxiao instance.
   * 
   * @example
   * lx-1
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the current user is included in the ChatBI feature canary release whitelist.
   */
  openChatBi?: boolean;
  /**
   * @remarks
   * The time when the order was placed, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-09-17 10:30:00
   */
  ordTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * order-1
   */
  orderId?: string;
  /**
   * @remarks
   * The time when the payment was made, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-09-17 10:35:00
   */
  payTime?: string;
  /**
   * @remarks
   * The URL used to access the application preview page.
   * 
   * @example
   * https://example.com/preview
   */
  previewUrl?: string;
  /**
   * @remarks
   * The SEO site configuration identifier.
   * 
   * @example
   * seo-site-1
   */
  seoSite?: string;
  /**
   * @remarks
   * The switch for the share rendering watermark. A value of 1 indicates enabled, and a value of 0 indicates disabled. This field is empty if not configured.
   * 
   * @example
   * 1
   */
  shareRenderWatermark?: string;
  /**
   * @remarks
   * The site version code.
   * 
   * @example
   * Max_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * The display name of the site version, including the deployment region.
   * 
   * @example
   * Flagship Edition [Hong Kong]
   */
  siteVersionText?: string;
  /**
   * @remarks
   * The identifier of the creation or synchronization source.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  source?: string;
  /**
   * @remarks
   * The ETag identifier of the current application template.
   * 
   * @example
   * etag-1
   */
  templateEtag?: string;
  /**
   * @remarks
   * The template ID used by the current application.
   * 
   * @example
   * tpl-1
   */
  templateId?: string;
  /**
   * @example
   * SUCC
   */
  upgradeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      applicationTypeText: 'ApplicationTypeText',
      bizId: 'BizId',
      caseAuditStatus: 'CaseAuditStatus',
      caseShelfStatus: 'CaseShelfStatus',
      chatbiTaskId: 'ChatbiTaskId',
      chatbiTaskStatus: 'ChatbiTaskStatus',
      commodityCode: 'CommodityCode',
      customerService: 'CustomerService',
      deployArea: 'DeployArea',
      icpbaNo: 'IcpbaNo',
      independentDeployment: 'IndependentDeployment',
      instanceId: 'InstanceId',
      openChatBi: 'OpenChatBi',
      ordTime: 'OrdTime',
      orderId: 'OrderId',
      payTime: 'PayTime',
      previewUrl: 'PreviewUrl',
      seoSite: 'SeoSite',
      shareRenderWatermark: 'ShareRenderWatermark',
      siteVersion: 'SiteVersion',
      siteVersionText: 'SiteVersionText',
      source: 'Source',
      templateEtag: 'TemplateEtag',
      templateId: 'TemplateId',
      upgradeStatus: 'UpgradeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      applicationTypeText: 'string',
      bizId: 'string',
      caseAuditStatus: 'string',
      caseShelfStatus: 'string',
      chatbiTaskId: 'string',
      chatbiTaskStatus: 'string',
      commodityCode: 'string',
      customerService: 'string',
      deployArea: 'string',
      icpbaNo: 'string',
      independentDeployment: AppInstanceProfileIndependentDeployment,
      instanceId: 'string',
      openChatBi: 'boolean',
      ordTime: 'string',
      orderId: 'string',
      payTime: 'string',
      previewUrl: 'string',
      seoSite: 'string',
      shareRenderWatermark: 'string',
      siteVersion: 'string',
      siteVersionText: 'string',
      source: 'string',
      templateEtag: 'string',
      templateId: 'string',
      upgradeStatus: 'string',
    };
  }

  validate() {
    if(this.independentDeployment && typeof (this.independentDeployment as any).validate === 'function') {
      (this.independentDeployment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

