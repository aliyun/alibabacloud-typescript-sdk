// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   dcdn_log_access_l1 (default): access logs.
   * *   dcdn_log_er: Edge Routine logs.
   * *   dcdn_log_waf: firewall logs.
   * *   dcdn_log_ipa: TCP/UDP proxy logs.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * 1.  cn: the Chinese mainland.
   * 2.  sg: outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The destination of the delivery. Valid values:
   * 
   * 1.  sls: Alibaba Cloud Simple Log Service (SLS).
   * 2.  http: HTTP server.
   * 3.  aws3: Amazon Simple Storage Service (S3).
   * 4.  oss: Alibaba Cloud Object Storage Service (OSS).
   * 5.  kafka: Kafka.
   * 6.  aws3cmpt: S3-compatible storage service.
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
   * The log fields.
   * 
   * @example
   * Client,UserAgent
   */
  fieldList?: string;
  /**
   * @remarks
   * The filtering rules.
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
   * The website ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * test.***.com
   */
  siteName?: string;
  /**
   * @remarks
   * The status of the delivery task.
   * 
   * *   **online**
   * *   **offline**
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The name of the delivery task.
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

