// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoSummaryJobRequest extends $dara.Model {
  AIVideoSummaryConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoSummaryConfig: 'AIVideoSummaryConfig',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoSummaryConfig: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
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

