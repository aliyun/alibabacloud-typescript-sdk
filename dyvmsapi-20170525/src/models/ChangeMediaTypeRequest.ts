// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMediaTypeRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  calledNum?: string;
  /**
   * @example
   * 示例值示例值
   */
  mediaType?: string;
  /**
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNum: 'CalledNum',
      mediaType: 'MediaType',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNum: 'string',
      mediaType: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

