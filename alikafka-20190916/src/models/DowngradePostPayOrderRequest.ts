// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DowngradePostPayOrderRequestServerlessConfig extends $dara.Model {
  reservedPublishCapacity?: number;
  reservedSubscribeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      reservedPublishCapacity: 'ReservedPublishCapacity',
      reservedSubscribeCapacity: 'ReservedSubscribeCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedPublishCapacity: 'number',
      reservedSubscribeCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradePostPayOrderRequest extends $dara.Model {
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
  serverlessConfig?: DowngradePostPayOrderRequestServerlessConfig;
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
      serverlessConfig: 'ServerlessConfig',
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
      serverlessConfig: DowngradePostPayOrderRequestServerlessConfig,
      specType: 'string',
      topicQuota: 'number',
    };
  }

  validate() {
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

