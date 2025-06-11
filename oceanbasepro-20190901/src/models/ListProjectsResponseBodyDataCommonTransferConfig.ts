// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataCommonTransferConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  activeActive?: boolean;
  /**
   * @example
   * null
   */
  dataWorksBusinessName?: string;
  /**
   * @example
   * TUPLE
   */
  datahubTopicType?: string;
  /**
   * @example
   * 0
   */
  mqPartition?: number;
  /**
   * @example
   * ONE
   */
  mqPartitionMode?: string;
  /**
   * @example
   * DEFAULT
   */
  mqSerializerType?: string;
  /**
   * @example
   * false
   */
  rocketMqEnableMsgTrace?: boolean;
  /**
   * @example
   * default_tag
   */
  rocketMqMsgTags?: string;
  /**
   * @example
   * OMS
   */
  rocketMqProducerGroup?: string;
  /**
   * @example
   * null
   */
  rocketMqSendMsgTimeout?: number;
  /**
   * @example
   * ALL
   */
  tableCategory?: string;
  static names(): { [key: string]: string } {
    return {
      activeActive: 'ActiveActive',
      dataWorksBusinessName: 'DataWorksBusinessName',
      datahubTopicType: 'DatahubTopicType',
      mqPartition: 'MqPartition',
      mqPartitionMode: 'MqPartitionMode',
      mqSerializerType: 'MqSerializerType',
      rocketMqEnableMsgTrace: 'RocketMqEnableMsgTrace',
      rocketMqMsgTags: 'RocketMqMsgTags',
      rocketMqProducerGroup: 'RocketMqProducerGroup',
      rocketMqSendMsgTimeout: 'RocketMqSendMsgTimeout',
      tableCategory: 'TableCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeActive: 'boolean',
      dataWorksBusinessName: 'string',
      datahubTopicType: 'string',
      mqPartition: 'number',
      mqPartitionMode: 'string',
      mqSerializerType: 'string',
      rocketMqEnableMsgTrace: 'boolean',
      rocketMqMsgTags: 'string',
      rocketMqProducerGroup: 'string',
      rocketMqSendMsgTimeout: 'number',
      tableCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

