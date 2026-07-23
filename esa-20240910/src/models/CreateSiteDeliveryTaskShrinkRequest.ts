// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteDeliveryTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - **dcdn_log_access_l1** (default): Access logs.
   * - **dcdn_log_er**: Edge Routine logs.
   * - **dcdn_log_waf**: Security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
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
   * - **cn**: The Chinese mainland.
   * - **oversea**: Outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * - **sls**: Simple Log Service.
   * - **http**: HTTP service.
   * - **aws3**: Amazon S3.
   * - **oss**: Object Storage Service (OSS).
   * - **kafka**: Kafka service.
   * - **aws3cmpt**: Amazon S3-compatible service.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The discard rate. If you do not specify this parameter, the default value is 0.
   * 
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * The log fields to be delivered, separated by commas (,).
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
   * The HTTP delivery configuration parameters.
   */
  httpDeliveryShrink?: string;
  /**
   * @remarks
   * The Kafka delivery configuration parameters.
   */
  kafkaDeliveryShrink?: string;
  /**
   * @remarks
   * The OSS delivery configuration.
   */
  ossDeliveryShrink?: string;
  /**
   * @remarks
   * The configuration parameters for S3 or S3-compatible delivery.
   */
  s3DeliveryShrink?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12312312112***
   */
  siteId?: number;
  /**
   * @remarks
   * The Simple Log Service delivery configuration.
   */
  slsDeliveryShrink?: string;
  /**
   * @remarks
   * The name of the task.
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

