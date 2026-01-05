// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SlotLifeCycle } from "./SlotLifeCycle";
import { SlotStatus } from "./SlotStatus";
import { EndpointStatus } from "./EndpointStatus";


export class ListSlotsResponseBodySlotsEndpoints extends $dara.Model {
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
   * endpoint-1
   */
  name?: string;
  /**
   * @example
   * 1557702098194904
   */
  ownerId?: string;
  status?: EndpointStatus;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * 276065346797410278
   */
  userId?: string;
  /**
   * @example
   * end-ivrq92qhbyrg4jctih
   */
  uuid?: string;
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      ownerId: 'OwnerId',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
      uuid: 'Uuid',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      ownerId: 'string',
      status: EndpointStatus,
      type: 'string',
      userId: 'string',
      uuid: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlotsResponseBodySlotsTags extends $dara.Model {
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

export class ListSlotsResponseBodySlots extends $dara.Model {
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
  endpoints?: ListSlotsResponseBodySlotsEndpoints[];
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
  tags?: ListSlotsResponseBodySlotsTags[];
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
      endpoints: 'Endpoints',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      ioType: 'IoType',
      lifeCycle: 'LifeCycle',
      name: 'Name',
      ownerId: 'OwnerId',
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
      endpoints: { 'type': 'array', 'itemType': ListSlotsResponseBodySlotsEndpoints },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      ioType: 'string',
      lifeCycle: SlotLifeCycle,
      name: 'string',
      ownerId: 'string',
      status: SlotStatus,
      storageType: 'string',
      storageUri: 'string',
      tags: { 'type': 'array', 'itemType': ListSlotsResponseBodySlotsTags },
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
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

export class ListSlotsResponseBody extends $dara.Model {
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  slots?: ListSlotsResponseBodySlots[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slots: 'Slots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slots: { 'type': 'array', 'itemType': ListSlotsResponseBodySlots },
      totalCount: 'number',
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

