// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   **dcdn_log_access_l1** (default): access logs.
   * *   **dcdn_log_er**: Edge Routine logs.
   * *   **dcdn_log_waf**: firewall logs.
   * *   **dcdn_log_ipa**: TCP/UDP proxy logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * *   cn: the Chinese mainland.
   * *   oversea: outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The destination of the delivery. Valid values:
   * 
   * *   sls: Alibaba Cloud Simple Log Service (SLS).
   * *   http: HTTP server.
   * *   aws3: Amazon Simple Storage Service (S3).
   * *   oss: Alibaba Cloud Object Storage Service (OSS).
   * *   kafka: Kafka.
   * *   aws3cmpt: S3-compatible storage service.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The discard rate. Default value: 0.
   * 
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * The log fields, which are separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_adress,ip_port
   */
  fieldName?: string;
  filterVer?: string;
  /**
   * @remarks
   * The configurations for delivery to an HTTP server.
   */
  httpDeliveryShrink?: string;
  /**
   * @remarks
   * The configurations for delivery to Kafka.
   */
  kafkaDeliveryShrink?: string;
  /**
   * @remarks
   * The configurations for delivery to OSS.
   */
  ossDeliveryShrink?: string;
  /**
   * @remarks
   * The configurations for delivery to Amazon S3 or an S3-compatible service.
   */
  s3DeliveryShrink?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 12312312112***
   */
  siteId?: number;
  /**
   * @remarks
   * The configurations for delivery to SLS.
   */
  slsDeliveryShrink?: string;
  /**
   * @remarks
   * The name of the delivery task.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      httpDeliveryShrink: 'HttpDelivery',
      kafkaDeliveryShrink: 'KafkaDelivery',
      ossDeliveryShrink: 'OssDelivery',
      s3DeliveryShrink: 'S3Delivery',
      siteId: 'SiteId',
      slsDeliveryShrink: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
      httpDeliveryShrink: 'string',
      kafkaDeliveryShrink: 'string',
      ossDeliveryShrink: 'string',
      s3DeliveryShrink: 'string',
      siteId: 'number',
      slsDeliveryShrink: 'string',
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

