// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DowngradePrePayOrderShrinkRequest extends $dara.Model {
  confluentConfigShrink?: string;
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
  paidType?: number;
  partitionNum?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  specType?: string;
  topicQuota?: number;
  static names(): { [key: string]: string } {
    return {
      confluentConfigShrink: 'ConfluentConfig',
      diskSize: 'DiskSize',
      eipMax: 'EipMax',
      eipModel: 'EipModel',
      instanceId: 'InstanceId',
      ioMax: 'IoMax',
      ioMaxSpec: 'IoMaxSpec',
      paidType: 'PaidType',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      specType: 'SpecType',
      topicQuota: 'TopicQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confluentConfigShrink: 'string',
      diskSize: 'number',
      eipMax: 'number',
      eipModel: 'boolean',
      instanceId: 'string',
      ioMax: 'number',
      ioMaxSpec: 'string',
      paidType: 'number',
      partitionNum: 'number',
      regionId: 'string',
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

