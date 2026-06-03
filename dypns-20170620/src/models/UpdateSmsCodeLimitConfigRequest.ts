// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsCodeLimitConfigRequest extends $dara.Model {
  limitDay?: number;
  limitHour?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  limitId?: number;
  limitMinute?: number;
  limitOther?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      limitDay: 'LimitDay',
      limitHour: 'LimitHour',
      limitId: 'LimitId',
      limitMinute: 'LimitMinute',
      limitOther: 'LimitOther',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitDay: 'number',
      limitHour: 'number',
      limitId: 'number',
      limitMinute: 'number',
      limitOther: 'string',
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

