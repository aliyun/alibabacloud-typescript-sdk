// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * RAM用户的虚拟账号ID。
   * 
   * @example
   * 155780923770
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the task. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 资源主账号的账号名称。
   * 
   * @example
   * ECSforCloud
   */
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * 资源主账号的ID，亦即UID。
   * 
   * @example
   * 155780923770
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the task. You can call the [DescribeTasks](https://help.aliyun.com/document_detail/25622.html) operation to query the list of task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-ce946ntx4wr****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

