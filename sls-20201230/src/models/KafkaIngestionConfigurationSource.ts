// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KafkaIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.1.28:9092
   */
  bootstrapServers?: string;
  /**
   * @example
   * {     "protocol":"SASL_PLAINTEXT",      "sasl":{         "mechanism":"PLAIN",         "username":"用户名",         "password":"密码"     } }
   */
  communication?: string;
  /**
   * @example
   * consumer
   */
  consumerGroup?: string;
  /**
   * @example
   * system,kafka
   */
  defaultTimeSource?: string;
  /**
   * @example
   * true
   */
  enableSlsContext?: boolean;
  enableVpcNat?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  format?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * earliest,latest
   */
  fromPosition?: string;
  /**
   * @example
   * {"hostname": "192.168.1.28"}
   */
  nameResolutions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  parseArray?: boolean;
  /**
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  securityGroups?: string;
  /**
   * @example
   * __time__
   */
  timeField?: string;
  /**
   * @example
   * epoch
   */
  timeFormat?: string;
  /**
   * @example
   * \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}
   */
  timePattern?: string;
  /**
   * @example
   * +0800
   */
  timeZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * topic1,topic2
   */
  topics?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text,json
   */
  valueType?: string;
  vpcId?: string;
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

