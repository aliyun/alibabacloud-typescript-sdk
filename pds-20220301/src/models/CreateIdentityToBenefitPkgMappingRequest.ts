// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityToBenefitPkgMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The number of benefit packages.
   * 
   * This parameter takes effect only for the benefit packages of the resource type. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The unique identifier of the benefit package.
   * 
   * This parameter is required.
   * 
   * @example
   * 40cb7794c9294
   */
  benefitPkgId?: string;
  /**
   * @remarks
   * The time when the benefit package expires. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * By default, the benefit package never expires.
   * 
   * @example
   * 1633167071000
   */
  expireTime?: number;
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * If you want to manage the benefits of a user, set this parameter to a user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user123
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the entity.
   * 
   * If you want to manage the benefits of a user, set this parameter to user.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      benefitPkgId: 'benefit_pkg_id',
      expireTime: 'expire_time',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      benefitPkgId: 'string',
      expireTime: 'number',
      identityId: 'string',
      identityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

