// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectRequestCommonTransferConfigCustomColumns } from "./CreateProjectRequestCommonTransferConfigCustomColumns";


export class CreateProjectRequestCommonTransferConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  activeActive?: boolean;
  customColumns?: CreateProjectRequestCommonTransferConfigCustomColumns[];
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
  sinkStoreFormat?: string;
  sourceStoreFormat?: string;
  syncSchema?: boolean;
  syncSchemaColumnName?: string;
  /**
   * @example
   * ALL
   */
  tableCategory?: string;
  static names(): { [key: string]: string } {
    return {
      activeActive: 'ActiveActive',
      customColumns: 'CustomColumns',
      dataWorksBusinessName: 'DataWorksBusinessName',
      datahubTopicType: 'DatahubTopicType',
      mqPartition: 'MqPartition',
      mqPartitionMode: 'MqPartitionMode',
      mqSerializerType: 'MqSerializerType',
      rocketMqEnableMsgTrace: 'RocketMqEnableMsgTrace',
      rocketMqMsgTags: 'RocketMqMsgTags',
      rocketMqProducerGroup: 'RocketMqProducerGroup',
      rocketMqSendMsgTimeout: 'RocketMqSendMsgTimeout',
      sinkStoreFormat: 'SinkStoreFormat',
      sourceStoreFormat: 'SourceStoreFormat',
      syncSchema: 'SyncSchema',
      syncSchemaColumnName: 'SyncSchemaColumnName',
      tableCategory: 'TableCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeActive: 'boolean',
      customColumns: { 'type': 'array', 'itemType': CreateProjectRequestCommonTransferConfigCustomColumns },
      dataWorksBusinessName: 'string',
      datahubTopicType: 'string',
      mqPartition: 'number',
      mqPartitionMode: 'string',
      mqSerializerType: 'string',
      rocketMqEnableMsgTrace: 'boolean',
      rocketMqMsgTags: 'string',
      rocketMqProducerGroup: 'string',
      rocketMqSendMsgTimeout: 'number',
      sinkStoreFormat: 'string',
      sourceStoreFormat: 'string',
      syncSchema: 'boolean',
      syncSchemaColumnName: 'string',
      tableCategory: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customColumns)) {
      $dara.Model.validateArray(this.customColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

