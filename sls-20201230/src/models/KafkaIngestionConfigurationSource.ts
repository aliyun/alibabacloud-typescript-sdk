// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KafkaIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * A list of bootstrap servers for the Kafka cluster, formatted as `host1:port1,host2:port2`.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.28:9092
   */
  bootstrapServers?: string;
  /**
   * @remarks
   * The authentication and communication protocol settings in JSON format. For example, you can use this parameter to configure SASL authentication.
   * 
   * @example
   * {     "protocol":"SASL_PLAINTEXT",      "sasl":{         "mechanism":"PLAIN",         "username":"用户名",         "password":"密码"     } }
   */
  communication?: string;
  /**
   * @remarks
   * The ID of the Kafka consumer group.
   * 
   * @example
   * consumer
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The default time source to use if timestamp extraction from the log data fails. Valid values are `system` (the time of the ingestion server) and `kafka` (the timestamp from the Kafka message).
   * 
   * @example
   * system,kafka
   */
  defaultTimeSource?: string;
  /**
   * @remarks
   * Specifies whether to add Simple Log Service (SLS) context fields, such as `__topic__` and `__partition__`, to each log entry.
   * 
   * @example
   * true
   */
  enableSlsContext?: boolean;
  /**
   * @remarks
   * Specifies whether to enable NAT for VPC connections. Set this to `true` if your Kafka cluster is in a VPC and requires NAT for access.
   */
  enableVpcNat?: boolean;
  /**
   * @remarks
   * The character encoding of the message. This parameter applies only when `valueType` is `text`.
   * 
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @remarks
   * The data format configuration.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * The starting position for data consumption. Valid values: `earliest` and `latest`.
   * 
   * This parameter is required.
   * 
   * @example
   * earliest,latest
   */
  fromPosition?: string;
  /**
   * @remarks
   * Custom DNS resolutions in JSON format. Use this parameter to map hostnames to IP addresses.
   * 
   * @example
   * {"hostname": "192.168.1.28"}
   */
  nameResolutions?: string;
  /**
   * @remarks
   * Specifies whether to parse a message as a JSON array. If `true`, each element in the array becomes a separate log entry. This parameter applies only when `valueType` is `json`.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  parseArray?: boolean;
  /**
   * @remarks
   * The ID of the ingestion processor.
   * 
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  /**
   * @remarks
   * The ID of the security group to associate with the ingestion source. This parameter is required when connecting to a Kafka cluster in a VPC. Separate multiple IDs with a comma (`,`).
   */
  securityGroups?: string;
  /**
   * @remarks
   * The field that contains the log timestamp. This parameter applies only when `valueType` is `json`.
   * 
   * @example
   * __time__
   */
  timeField?: string;
  /**
   * @remarks
   * The format of the timestamp. For example, you can set this to `epoch` for a Unix timestamp.
   * 
   * @example
   * epoch
   */
  timeFormat?: string;
  /**
   * @remarks
   * The regular expression for extracting the timestamp from the field specified by `timeField`.
   * 
   * @example
   * \\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}
   */
  timePattern?: string;
  /**
   * @remarks
   * The time zone of the timestamp, such as `+0800`.
   * 
   * @example
   * +0800
   */
  timeZone?: string;
  /**
   * @remarks
   * The Kafka topics to subscribe to. Separate multiple topics with a comma (`,`).
   * 
   * This parameter is required.
   * 
   * @example
   * topic1,topic2
   */
  topics?: string;
  /**
   * @remarks
   * The format of the message value. Valid values: `text` and `json`.
   * 
   * This parameter is required.
   * 
   * @example
   * text,json
   */
  valueType?: string;
  /**
   * @remarks
   * The ID of the VPC that contains the Kafka cluster.
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VSwitch in the specified VPC. This parameter is required when connecting to a Kafka cluster in a VPC.
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bootstrapServers: 'bootstrapServers',
      communication: 'communication',
      consumerGroup: 'consumerGroup',
      defaultTimeSource: 'defaultTimeSource',
      enableSlsContext: 'enableSlsContext',
      enableVpcNat: 'enableVpcNat',
      encoding: 'encoding',
      format: 'format',
      fromPosition: 'fromPosition',
      nameResolutions: 'nameResolutions',
      parseArray: 'parseArray',
      processorId: 'processorId',
      securityGroups: 'securityGroups',
      timeField: 'timeField',
      timeFormat: 'timeFormat',
      timePattern: 'timePattern',
      timeZone: 'timeZone',
      topics: 'topics',
      valueType: 'valueType',
      vpcId: 'vpcId',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapServers: 'string',
      communication: 'string',
      consumerGroup: 'string',
      defaultTimeSource: 'string',
      enableSlsContext: 'boolean',
      enableVpcNat: 'boolean',
      encoding: 'string',
      format: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fromPosition: 'string',
      nameResolutions: 'string',
      parseArray: 'boolean',
      processorId: 'string',
      securityGroups: 'string',
      timeField: 'string',
      timeFormat: 'string',
      timePattern: 'string',
      timeZone: 'string',
      topics: 'string',
      valueType: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(this.format) {
      $dara.Model.validateMap(this.format);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

