// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCDNStatisSumRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endStatisTime?: string;
  level?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startStatisTime?: string;
  static names(): { [key: string]: string } {
    return {
      endStatisTime: 'EndStatisTime',
      level: 'Level',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startStatisTime: 'StartStatisTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endStatisTime: 'string',
      level: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      startStatisTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

