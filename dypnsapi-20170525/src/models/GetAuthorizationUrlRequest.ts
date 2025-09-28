// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization end date, which is in the yyyy-MM-dd format. This parameter is required for services of contract type.
   * 
   * @example
   * 2020–12–28
   */
  endDate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the authorization scenario. You can view the ID of the authorization scenario on the **Authorization Scenario Management** page in the **Phone Number Verification Service console**.
   * 
   * This parameter is required.
   * 
   * @example
   * 234****
   */
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      ownerId: 'number',
      phoneNo: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

