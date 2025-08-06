// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoPlayInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientTS?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  clientVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  playSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  signVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      clientTS: 'ClientTS',
      clientVersion: 'ClientVersion',
      ownerId: 'OwnerId',
      playSign: 'PlaySign',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signVersion: 'SignVersion',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      clientTS: 'number',
      clientVersion: 'string',
      ownerId: 'number',
      playSign: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signVersion: 'string',
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

