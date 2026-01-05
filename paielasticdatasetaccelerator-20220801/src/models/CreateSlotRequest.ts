// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SlotLifeCycle } from "./SlotLifeCycle";


export class CreateSlotRequestEndpoints extends $dara.Model {
  /**
   * @example
   * endpoint-1
   */
  name?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * vpc-j6co2fcdsl1q0gnuc3ym3
   */
  vpcId?: string;
  /**
   * @example
   * vsw-j6cmr00qjyrft6jo2mg7g
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlotRequestTags extends $dara.Model {
  /**
   * @example
   * dataset_version
   */
  key?: string;
  /**
   * @example
   * v0.1.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30.0G
   */
  capacity?: string;
  /**
   * @example
   * xgboost数据集加速槽
   */
  description?: string;
  /**
   * @example
   * end-my1tk3jggooi5uwks5,end-n69468yvjz8d12as7d,end-tga4omjrepklkg1onn
   */
  endpointIds?: string;
  endpoints?: CreateSlotRequestEndpoints[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * inst-my1tk3jggooi5uwks5
   */
  instanceId?: string;
  ioType?: string;
  lifeCycle?: SlotLifeCycle;
  /**
   * @example
   * slot_1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://pai-vision-data-hz2.oss-cn-hangzhou-internal.aliyuncs.com/data/VOCdevkit/VOC2007/ImageSets/Main/val.txt
   */
  storageUri?: string;
  tags?: CreateSlotRequestTags[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      description: 'Description',
      endpointIds: 'EndpointIds',
      endpoints: 'Endpoints',
      instanceId: 'InstanceId',
      ioType: 'IoType',
      lifeCycle: 'LifeCycle',
      name: 'Name',
      storageType: 'StorageType',
      storageUri: 'StorageUri',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      description: 'string',
      endpointIds: 'string',
      endpoints: { 'type': 'array', 'itemType': CreateSlotRequestEndpoints },
      instanceId: 'string',
      ioType: 'string',
      lifeCycle: SlotLifeCycle,
      name: 'string',
      storageType: 'string',
      storageUri: 'string',
      tags: { 'type': 'array', 'itemType': CreateSlotRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(this.lifeCycle && typeof (this.lifeCycle as any).validate === 'function') {
      (this.lifeCycle as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

