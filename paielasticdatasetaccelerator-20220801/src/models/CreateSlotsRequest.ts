// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SlotLifeCycle } from "./SlotLifeCycle";


export class CreateSlotsRequestSlotsTags extends $dara.Model {
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

export class CreateSlotsRequestSlots extends $dara.Model {
  /**
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
  tags?: CreateSlotsRequestSlotsTags[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      description: 'Description',
      endpointIds: 'EndpointIds',
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
      instanceId: 'string',
      ioType: 'string',
      lifeCycle: SlotLifeCycle,
      name: 'string',
      storageType: 'string',
      storageUri: 'string',
      tags: { 'type': 'array', 'itemType': CreateSlotsRequestSlotsTags },
    };
  }

  validate() {
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

export class CreateSlotsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  slots?: CreateSlotsRequestSlots[];
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      slots: 'Slots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      slots: { 'type': 'array', 'itemType': CreateSlotsRequestSlots },
    };
  }

  validate() {
    if(Array.isArray(this.slots)) {
      $dara.Model.validateArray(this.slots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

