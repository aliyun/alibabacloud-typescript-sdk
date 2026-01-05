// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceStatus } from "./InstanceStatus";


export class ListInstancesResponseBodyInstancesTags extends $dara.Model {
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

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * 30.0G
   */
  capacity?: string;
  /**
   * @example
   * xgboost数据集加速实例
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
   * readonly
   */
  ioType?: string;
  /**
   * @remarks
   * 数据集加速实例的最大挂载点个数。
   */
  maxEndpoint?: number;
  /**
   * @example
   * 20
   */
  maxSlot?: number;
  /**
   * @example
   * acc_instance_1
   */
  name?: string;
  /**
   * @example
   * 1557702098194904
   */
  ownerId?: string;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * 数据集加速实例的资源提供者类型。
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  status?: InstanceStatus;
  /**
   * @remarks
   * 数据集加速实例的存储类型。
   * 
   * @example
   * OSS
   */
  storageType?: string;
  tags?: ListInstancesResponseBodyInstancesTags[];
  /**
   * @example
   * Basic
   */
  type?: string;
  /**
   * @example
   * 276065346797410278
   */
  userId?: string;
  /**
   * @example
   * inst-my1tk3jggooi5uwks5
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      ioType: 'IoType',
      maxEndpoint: 'MaxEndpoint',
      maxSlot: 'MaxSlot',
      name: 'Name',
      ownerId: 'OwnerId',
      paymentType: 'PaymentType',
      providerType: 'ProviderType',
      status: 'Status',
      storageType: 'StorageType',
      tags: 'Tags',
      type: 'Type',
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
      ioType: 'string',
      maxEndpoint: 'number',
      maxSlot: 'number',
      name: 'string',
      ownerId: 'string',
      paymentType: 'string',
      providerType: 'string',
      status: InstanceStatus,
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesTags },
      type: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
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

export class ListInstancesResponseBody extends $dara.Model {
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

