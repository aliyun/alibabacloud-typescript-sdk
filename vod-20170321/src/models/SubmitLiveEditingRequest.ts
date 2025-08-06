// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveEditingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clips?: string;
  coverURL?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  mediaMetadata?: string;
  ownerId?: number;
  produceConfig?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  streamName?: string;
  title?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clips: 'Clips',
      coverURL: 'CoverURL',
      description: 'Description',
      domainName: 'DomainName',
      mediaMetadata: 'MediaMetadata',
      ownerId: 'OwnerId',
      produceConfig: 'ProduceConfig',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      streamName: 'StreamName',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clips: 'string',
      coverURL: 'string',
      description: 'string',
      domainName: 'string',
      mediaMetadata: 'string',
      ownerId: 'number',
      produceConfig: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      streamName: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

