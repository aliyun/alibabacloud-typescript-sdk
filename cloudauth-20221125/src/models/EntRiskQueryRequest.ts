// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntRiskQueryRequest extends $dara.Model {
  /**
   * @remarks
   * A unique business identifier defined by the merchant side, used for subsequent problem localization and troubleshooting. Supports a combination of 32 alphanumeric characters, please ensure uniqueness.
   * 
   * @example
   * 32198****193000
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A custom user ID in your business, used for subsequent problem localization and troubleshooting.
   * 
   * @example
   * 无
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Parameter type.
   * 00: Company name;
   * 01: Business registration number;
   * 02: Unified Social Credit Code;
   * 03: Organization code;
   * 
   * @example
   * 00
   */
  paramType?: string;
  /**
   * @remarks
   * Enter one of the following based on the ParamType: company name, business registration number, unified social credit code, or organization code.
   * 
   * @example
   * 91330106673959****
   */
  paramValue?: string;
  /**
   * @remarks
   * Custom scene code, used to distinguish business scenarios, a 10-digit number.
   * 
   * @example
   * 1000000086
   */
  sceneCode?: string;
  /**
   * @remarks
   * Whether user authorization is obtained.
   * 1: Authorized
   * 0: Not authorized
   * 
   * @example
   * 1
   */
  userAuthorization?: string;
  static names(): { [key: string]: string } {
    return {
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      sceneCode: 'SceneCode',
      userAuthorization: 'UserAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merchantBizId: 'string',
      merchantUserId: 'string',
      paramType: 'string',
      paramValue: 'string',
      sceneCode: 'string',
      userAuthorization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

