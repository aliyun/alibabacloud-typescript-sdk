// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - **dcdn_log_access_l1** (default): access log.
   * 
   * - **dcdn_log_er**: edge function log.
   * 
   * - **dcdn_log_waf**: WAF protection log.
   * 
   * - **dcdn_log_ipa**: Layer-4 acceleration log.
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
   * - **cn**: Chinese mainland.
   * 
   * - **oversea**: regions outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The type of the delivery destination. Valid values:
   * 
   * - **sls**: Log Service.
   * 
   * - **http**: an HTTP service.
   * 
   * - **aws3**: Amazon S3.
   * 
   * - **oss**: Object Storage Service.
   * 
   * - **kafka**: a Kafka service.
   * 
   * - **aws3cmpt**: an Amazon S3-compatible service.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The discard rate. If you do not specify this parameter, the default value 0 is used.
   * 
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * The log fields for delivery. Separate multiple fields with a comma (,).
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
   * The parameters for delivering logs to an HTTP server.
   */
  httpDeliveryShrink?: string;
  /**
   * @remarks
   * The parameters for delivering logs to a Kafka cluster.
   */
  kafkaDeliveryShrink?: string;
  /**
   * @remarks
   * The parameters for delivering logs to Object Storage Service (OSS).
   */
  ossDeliveryShrink?: string;
  /**
   * @remarks
   * The parameters for delivering logs to an Amazon S3 bucket or an S3-compatible service.
   */
  s3DeliveryShrink?: string;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12312312112***
   */
  siteId?: number;
  /**
   * @remarks
   * The parameters for delivering logs to Log Service.
   */
  slsDeliveryShrink?: string;
  /**
   * @remarks
   * The task name.
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

