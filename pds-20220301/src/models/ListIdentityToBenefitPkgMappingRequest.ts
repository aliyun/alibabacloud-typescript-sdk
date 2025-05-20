// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityToBenefitPkgMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * If you call this operation to manage the benefits of a user, set this parameter to the ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * user123
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the entity. If you call this operation to manage the benefits of a user, set this parameter to user.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  identityType?: string;
  /**
   * @remarks
   * Specifies whether to return the benefit packages that expire. Default value: false.
   * 
   * @example
   * false
   */
  includeExpired?: boolean;
  static names(): { [key: string]: string } {
    return {
      identityId: 'identity_id',
      identityType: 'identity_type',
      includeExpired: 'include_expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      identityType: 'string',
      includeExpired: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

