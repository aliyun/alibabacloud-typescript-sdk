// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorksAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authPoints?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  authorizeScope?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ASDAS-WDAS****ASDA
   */
  authorizedId?: string;
  /**
   * @example
   * 2099-12-31
   */
  expireDay?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * al*************7ufv
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dashboard
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      authPoints: 'AuthPoints',
      authorizeScope: 'AuthorizeScope',
      authorizedId: 'AuthorizedId',
      expireDay: 'ExpireDay',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoints: 'number',
      authorizeScope: 'number',
      authorizedId: 'string',
      expireDay: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

