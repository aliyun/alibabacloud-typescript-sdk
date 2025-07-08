// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCardResRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  callerParentId?: string;
  /**
   * @example
   * 示例值示例值
   */
  callerType?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  callerUid?: string;
  /**
   * @example
   * 示例值示例值
   */
  extendInfo?: string;
  /**
   * @example
   * 46
   */
  fileSize?: number;
  /**
   * @example
   * 示例值
   */
  fileUrl?: string;
  /**
   * @example
   * 示例值
   */
  memo?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      callerParentId: 'CallerParentId',
      callerType: 'CallerType',
      callerUid: 'CallerUid',
      extendInfo: 'ExtendInfo',
      fileSize: 'FileSize',
      fileUrl: 'FileUrl',
      memo: 'Memo',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'string',
      callerType: 'string',
      callerUid: 'string',
      extendInfo: 'string',
      fileSize: 'number',
      fileUrl: 'string',
      memo: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

