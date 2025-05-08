// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUserDeliveryTaskRequestHttpDelivery } from "./CreateUserDeliveryTaskRequestHttpDelivery";
import { CreateUserDeliveryTaskRequestKafkaDelivery } from "./CreateUserDeliveryTaskRequestKafkaDelivery";
import { CreateUserDeliveryTaskRequestOssDelivery } from "./CreateUserDeliveryTaskRequestOssDelivery";
import { CreateUserDeliveryTaskRequestS3Delivery } from "./CreateUserDeliveryTaskRequestS3delivery";
import { CreateUserDeliveryTaskRequestSlsDelivery } from "./CreateUserDeliveryTaskRequestSlsDelivery";


export class CreateUserDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   dcdn_log_access_l1 (default): access logs.
   * *   dcdn_log_er: Edge Routine logs.
   * *   dcdn_log_waf: firewall logs.
   * *   dcdn_log_ipa: TCP/UDP proxy logs.
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
   * *   sg: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The destination of the delivery. Valid values:
   * 
   * 1.  sls: Alibaba Cloud SLS.
   * 2.  http: HTTP server.
   * 3.  aws3: Amazon S3.
   * 4.  oss: Alibaba Cloud OSS.
   * 5.  kafka: Kafka.
   * 6.  aws3cmpt: S3-compatible storage service.
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
   * The discard rate. Default value: 0.
   * 
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * The log field. If you specify multiple fields, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_address,ip_port
   */
  fieldName?: string;
  /**
   * @remarks
   * The configurations for delivery to an HTTP server.
   */
  httpDelivery?: CreateUserDeliveryTaskRequestHttpDelivery;
  /**
   * @remarks
   * The configurations for delivery to Kafka.
   */
  kafkaDelivery?: CreateUserDeliveryTaskRequestKafkaDelivery;
  /**
   * @remarks
   * The configurations for delivery to OSS.
   */
  ossDelivery?: CreateUserDeliveryTaskRequestOssDelivery;
  /**
   * @remarks
   * The configurations for delivery to Amazon S3 or an S3-compatible service.
   */
  s3Delivery?: CreateUserDeliveryTaskRequestS3Delivery;
  /**
   * @remarks
   * The configurations for delivery to SLS.
   */
  slsDelivery?: CreateUserDeliveryTaskRequestSlsDelivery;
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
      httpDelivery: 'HttpDelivery',
      kafkaDelivery: 'KafkaDelivery',
      ossDelivery: 'OssDelivery',
      s3Delivery: 'S3Delivery',
      slsDelivery: 'SlsDelivery',
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
      httpDelivery: CreateUserDeliveryTaskRequestHttpDelivery,
      kafkaDelivery: CreateUserDeliveryTaskRequestKafkaDelivery,
      ossDelivery: CreateUserDeliveryTaskRequestOssDelivery,
      s3Delivery: CreateUserDeliveryTaskRequestS3Delivery,
      slsDelivery: CreateUserDeliveryTaskRequestSlsDelivery,
      taskName: 'string',
    };
  }

  validate() {
    if(this.httpDelivery && typeof (this.httpDelivery as any).validate === 'function') {
      (this.httpDelivery as any).validate();
    }
    if(this.kafkaDelivery && typeof (this.kafkaDelivery as any).validate === 'function') {
      (this.kafkaDelivery as any).validate();
    }
    if(this.ossDelivery && typeof (this.ossDelivery as any).validate === 'function') {
      (this.ossDelivery as any).validate();
    }
    if(this.s3Delivery && typeof (this.s3Delivery as any).validate === 'function') {
      (this.s3Delivery as any).validate();
    }
    if(this.slsDelivery && typeof (this.slsDelivery as any).validate === 'function') {
      (this.slsDelivery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

