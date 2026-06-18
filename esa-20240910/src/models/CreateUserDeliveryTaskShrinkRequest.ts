// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserDeliveryTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The real-time log type. Valid values:
   * 
   * - **dcdn_log_access_l1** (default): access log.
   * 
   * - **dcdn_log_er**: edge function log.
   * 
   * - **dcdn_log_waf**: WAF log.
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
   * - **sg**: global (excluding the Chinese mainland).
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The log delivery destination. Valid values:
   * 
   * - **sls**: Log Service (SLS).
   * 
   * - **http**: an HTTP service.
   * 
   * - **aws3**: Amazon S3.
   * 
   * - **oss**: Object Storage Service (OSS).
   * 
   * - **kafka**: Kafka.
   * 
   * - **aws3cmpt**: an S3-compatible service.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  details?: string;
  /**
   * @remarks
   * The log discard rate. Defaults to 0.
   * 
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * The fields to be delivered. Separate multiple fields with a comma.
   * 
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_address,ip_port
   */
  fieldName?: string;
  filterVer?: string;
  /**
   * @remarks
   * Configuration for delivering logs to an HTTP or HTTPS endpoint.
   */
  httpDeliveryShrink?: string;
  /**
   * @remarks
   * Configuration for delivering logs to Kafka.
   */
  kafkaDeliveryShrink?: string;
  /**
   * @remarks
   * Configuration for delivering logs to Object Storage Service (OSS).
   */
  ossDeliveryShrink?: string;
  /**
   * @remarks
   * Configuration for delivering logs to Amazon S3 or an S3-compatible service.
   */
  s3DeliveryShrink?: string;
  /**
   * @remarks
   * Configuration for delivering logs to Log Service (SLS).
   */
  slsDeliveryShrink?: string;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      details: 'Details',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      httpDeliveryShrink: 'HttpDelivery',
      kafkaDeliveryShrink: 'KafkaDelivery',
      ossDeliveryShrink: 'OssDelivery',
      s3DeliveryShrink: 'S3Delivery',
      slsDeliveryShrink: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      details: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
      httpDeliveryShrink: 'string',
      kafkaDeliveryShrink: 'string',
      ossDeliveryShrink: 'string',
      s3DeliveryShrink: 'string',
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

