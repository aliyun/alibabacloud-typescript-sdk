// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNumberV2ShrinkRequest extends $dara.Model {
  customersShrink?: string;
  /**
   * @example
   * 1
   */
  failReturn?: number;
  /**
   * @example
   * 示例值
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 92
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customersShrink: 'Customers',
      failReturn: 'FailReturn',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customersShrink: 'string',
      failReturn: 'number',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

