// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SlotLifeCycle } from "./SlotLifeCycle";
import { SlotStatus } from "./SlotStatus";


export class DescribeSlotResponseBodyTags extends $dara.Model {
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

export class DescribeSlotResponseBody extends $dara.Model {
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
   * 2014-10-02T15:01:23Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2014-10-02T15:01:23Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * inst-my1tk3jggooi5uwks5
   */
  instanceId?: string;
  /**
   * @remarks
   * 数据集加速槽的读写类型。
   * 
   * @example
   * readonly
   */
  ioType?: string;
  lifeCycle?: SlotLifeCycle;
  /**
   * @example
   * slot_1
   */
  name?: string;
  /**
   * @example
   * 1557702098194904
   */
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  status?: SlotStatus;
  /**
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @example
   * oss://pai-vision-data-hz2.oss-cn-hangzhou-internal.aliyuncs.com/data/VOCdevkit/VOC2007/ImageSets/Main/val.txt
   */
  storageUri?: string;
  tags?: DescribeSlotResponseBodyTags[];
  /**
   * @example
   * 276065346797410278
   */
  userId?: string;
  /**
   * @example
   * slot-5zk866779me51jgu3w
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      ioType: 'IoType',
      lifeCycle: 'LifeCycle',
      name: 'Name',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      status: 'Status',
      storageType: 'StorageType',
      storageUri: 'StorageUri',
      tags: 'Tags',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      ioType: 'string',
      lifeCycle: SlotLifeCycle,
      name: 'string',
      ownerId: 'string',
      requestId: 'string',
      status: SlotStatus,
      storageType: 'string',
      storageUri: 'string',
      tags: { 'type': 'array', 'itemType': DescribeSlotResponseBodyTags },
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.lifeCycle && typeof (this.lifeCycle as any).validate === 'function') {
      (this.lifeCycle as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
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

