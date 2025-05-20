// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityToBenefitPkgMappingRequest extends $dara.Model {
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
   * The type of the entity. If you want to manage the benefits of a user, set this parameter to user.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPkgId: 'benefit_pkg_id',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPkgId: 'string',
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

