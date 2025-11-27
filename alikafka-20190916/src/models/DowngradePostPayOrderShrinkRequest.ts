// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DowngradePostPayOrderShrinkRequest extends $dara.Model {
  diskSize?: number;
  eipMax?: number;
  eipModel?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ioMax?: number;
  ioMaxSpec?: string;
  partitionNum?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  serverlessConfigShrink?: string;
  specType?: string;
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      serverlessConfigShrink: 'ServerlessConfig',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      partitionNum: 'number',
      regionId: 'string',
      serverlessConfigShrink: 'string',
      specType: 'string',
      topicQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

