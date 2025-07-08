// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCardResWithDyncParamRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  dynamicParam?: string;
  /**
   * @example
   * 48
   */
  expiredTimes?: number;
  /**
   * @example
   * 73
   */
  fileSize?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  fileUrl?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  memo?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  resourceType?: string;
  /**
   * @example
   * 示例值示例值
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicParam: 'DynamicParam',
      expiredTimes: 'ExpiredTimes',
      fileSize: 'FileSize',
      fileUrl: 'FileUrl',
      memo: 'Memo',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicParam: 'string',
      expiredTimes: 'number',
      fileSize: 'number',
      fileUrl: 'string',
      memo: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

