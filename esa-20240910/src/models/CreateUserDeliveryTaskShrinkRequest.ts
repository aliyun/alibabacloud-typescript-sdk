// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserDeliveryTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The real-time log type. Valid values:
   * 
   * - **dcdn_log_er_pod**: edge container logs.
   * - **dcdn_log_dns**: edge DNS logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_er_pod
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * - **cn**: the Chinese mainland.
   * - **sg**: global (excluding the Chinese mainland).
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * 
   * - **sls**: Alibaba Cloud Simple Log Service.
   * - **http**: HTTP service.
   * - **aws3**: Amazon S3 service.
   * - **oss**: Alibaba Cloud Object Storage Service.
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
   * The list of Edge Routine (ER) pods to configure.
   * 
   * @example
   * xxx,xxx
   */
  details?: string;
  /**
   * @remarks
   * The discard rate. Default value: 0.
   * 
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * The fields to deliver, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ClientIP,ClientRequestURI,EdgeResponseStatusCode
   */
  fieldName?: string;
  /**
   * @remarks
   * The version of the filter rule.
   * 
   * > This parameter is used for backward compatibility with legacy filter rules. The default value is v1. New tasks use v2.
   * 
   * @example
   * v2
   */
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
   * The OSS delivery configuration parameters.
   */
  ossDeliveryShrink?: string;
  /**
   * @remarks
   * The S3 or S3-compatible delivery configuration parameters.
   */
  s3DeliveryShrink?: string;
  /**
   * @remarks
   * The SLS delivery configuration.
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

