// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPhoneNoAByTrackNoRequest extends $dara.Model {
  /**
   * @remarks
   * The cabinet number.
   * 
   * @example
   * 25689****
   */
  cabinetNo?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number X returned by the API operation for creating a binding.
   * 
   * @example
   * 1710000****
   */
  phoneNoX?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tracking number.
   * 
   * This parameter is required.
   * 
   * @example
   * 22573****
   */
  trackNo?: string;
  static names(): { [key: string]: string } {
    return {
      cabinetNo: 'CabinetNo',
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trackNo: 'trackNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinetNo: 'string',
      ownerId: 'number',
      phoneNoX: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trackNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

