// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PlayVideoFileRequest extends $dara.Model {
  /**
   * @example
   * 116012354148^1028137841****
   */
  callId?: string;
  /**
   * @example
   * 示例值
   */
  calledNumber?: string;
  /**
   * @example
   * false
   */
  onlyPhone?: boolean;
  /**
   * @example
   * 342268*****
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      onlyPhone: 'OnlyPhone',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      onlyPhone: 'boolean',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

