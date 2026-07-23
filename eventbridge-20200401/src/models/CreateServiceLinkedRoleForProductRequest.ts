// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceLinkedRoleForProductRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cloud service or the service-linked role (SLR) that is associated with the service.
   * 
   * - AliyunServiceRoleForEventBridgeSendToFC: Delivers events to Function Compute (FC).
   * 
   * - AliyunServiceRoleForEventBridgeSendToSMS: Delivers events as text messages to Short Message Service (SMS).
   * 
   * - AliyunServiceRoleForEventBridgeSendToDirectMail: Delivers events as emails to Alibaba Cloud DirectMail.
   * 
   * - AliyunServiceRoleForEventBridgeSourceRocketMQ: Integrates messages from ApsaraMQ for RocketMQ instances into EventBridge.
   * 
   * - AliyunServiceRoleForEventBridgeSourceMNS: Integrates Message Service (MNS) into EventBridge.
   * 
   * - AliyunServiceRoleForEventBridgeConnectVPC: Lets EventBridge access your Virtual Private Cloud (VPC) network.
   * 
   * - AliyunServiceRoleForEventBridgeSourceActionTrail: Uses operation records from ActionTrail as event sources.
   * 
   * - AliyunServiceRoleForEventBridgeSourceRabbitMQ: Integrates ApsaraMQ for RabbitMQ instances into EventBridge.
   * 
   * - AliyunServiceRoleForEventBridgeSendToRabbitMQ: Delivers EventBridge events to ApsaraMQ for RabbitMQ instances.
   * 
   * - AliyunServiceRoleForEventBridgeSendToRocketMQ: Delivers EventBridge events to ApsaraMQ for RocketMQ instances.
   * 
   * - AliyunServiceRoleForEventBridgeSourceCMS: Integrates CloudMonitor (CMS) into EventBridge.
   * 
   * - AliyunServiceRoleForEventBridgeSendToKafka: Delivers EventBridge events to ApsaraMQ for Kafka clusters.
   * 
   * - AliyunServiceRoleForEventBridgeSourceKafka: Integrates ApsaraMQ for Kafka into EventBridge.
   * 
   * - AliyunServiceRoleForEventBridgeSendToRDS: Delivers EventBridge events to Relational Database Service (RDS) instances.
   * 
   * - AliyunServiceRoleForEventBridgeSendToSAE: Delivers EventBridge events to Serverless App Engine (SAE) applications.
   * 
   * - AliyunServiceRoleForEventBridgeSourceMqtt: Integrates ApsaraMQ for MQTT into EventBridge.
   * 
   * - AliyunServiceRoleForEventBridgeSourceSLS: Integrates Simple Log Service (SLS) into EventBridge.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForEventBridgeSendToMNS
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

