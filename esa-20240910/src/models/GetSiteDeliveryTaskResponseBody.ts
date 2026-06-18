// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of real-time log for Dynamic Route for CDN (DCDN). Valid values:
   * 
   * - **dcdn_log_access_l1** (default): access log.
   * 
   * - **dcdn_log_er**: edge function log.
   * 
   * - **dcdn_log_waf**: WAF log.
   * 
   * - **dcdn_log_ipa**: layer 4 acceleration log.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * - **cn**: Chinese mainland.
   * 
   * - **sg**: Global (excluding Chinese mainland). Note that the value for this region is "sg".
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * 
   * - **sls**: Log Service.
   * 
   * - **http**: HTTP service.
   * 
   * - **aws3**: Amazon S3.
   * 
   * - **oss**: Object Storage Service.
   * 
   * - **kafka**: Kafka service.
   * 
   * - **aws3cmpt**: Amazon S3-compatible service.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The discard rate.
   * 
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * A comma-separated list of log fields to deliver.
   * 
   * @example
   * Client,UserAgent
   */
  fieldList?: string;
  /**
   * @remarks
   * The filter rules.
   * 
   * @example
   * []
   */
  filterRules?: string;
  filterVer?: string;
  rawRule?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @remarks
   * The delivery configuration.
   * 
   * @example
   * {\\"Region\\": \\"cn-hangzhou\\", \\"Endpoint\\": \\"https://***.oss-cn-hangzhou.aliyuncs.com\\", \\"BucketPath\\": \\"hjy-test002/online-logs\\"}
   */
  sinkConfig?: any;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * test.***.com
   */
  siteName?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - **online**: The task is delivering logs.
   * 
   * - **offline**: The task is paused.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldList: 'FieldList',
      filterRules: 'FilterRules',
      filterVer: 'FilterVer',
      rawRule: 'RawRule',
      requestId: 'RequestId',
      sinkConfig: 'SinkConfig',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldList: 'string',
      filterRules: 'string',
      filterVer: 'string',
      rawRule: 'string',
      requestId: 'string',
      sinkConfig: 'any',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

