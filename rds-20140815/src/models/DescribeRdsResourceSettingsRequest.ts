// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsResourceSettingsRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The location of the notification.
   * 
   * *   noticeBar: notification bar
   * *   popUp: popup
   * 
   * This parameter is required.
   * 
   * @example
   * noticeBar
   */
  resourceNiche?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceNiche: 'ResourceNiche',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceNiche: 'string',
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

