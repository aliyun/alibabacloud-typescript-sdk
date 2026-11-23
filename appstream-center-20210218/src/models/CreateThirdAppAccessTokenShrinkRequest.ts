// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThirdAppAccessTokenShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The WyId of the authorized user. The user must belong to the current calling account. This parameter is not the username.
   * 
   * This parameter is required.
   * 
   * @example
   * f1e2d3c4b5a6****
   */
  authorizerId?: string;
  /**
   * @remarks
   * The business channel. Valid values: Enterprise and Business. The value is case-insensitive. If omitted, the default value is Enterprise. If an empty string or other values are explicitly passed, a parameter error is returned. This parameter does not replace user identity verification.
   * 
   * @example
   * Enterprise
   */
  businessChannel?: string;
  /**
   * @remarks
   * The validity period of the token, in seconds. Valid values: 1 to 15552000. If omitted, the default value is 15552000, which equals 180 days. Permanent validity is not supported, and 0 cannot be passed.
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * The target single cloud desktop resource. You must provide this object along with ResourceType and ResourceId when you call this operation. Pass this parameter as a JSON object and specify only one cloud desktop. Wildcards or authorization for all cloud desktops are not supported.
   */
  resourceShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authorizerId: 'AuthorizerId',
      businessChannel: 'BusinessChannel',
      expiration: 'Expiration',
      resourceShrink: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizerId: 'string',
      businessChannel: 'string',
      expiration: 'number',
      resourceShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

