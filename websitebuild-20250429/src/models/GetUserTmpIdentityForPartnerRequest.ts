// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserTmpIdentityForPartnerRequest extends $dara.Model {
  /**
   * @example
   * BindDomain
   */
  authPurpose?: string;
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  extend?: string;
  /**
   * @example
   * AliyunServiceRoleForSasCspm
   */
  serviceLinkedRole?: string;
  /**
   * @example
   * 1231331311
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authPurpose: 'AuthPurpose',
      bizId: 'BizId',
      extend: 'Extend',
      serviceLinkedRole: 'ServiceLinkedRole',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPurpose: 'string',
      bizId: 'string',
      extend: 'string',
      serviceLinkedRole: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

