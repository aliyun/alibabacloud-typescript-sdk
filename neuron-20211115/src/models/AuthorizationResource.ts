// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizationResource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authorizerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * developer
   */
  authorizerType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizerId: 'authorizerId',
      authorizerType: 'authorizerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizerId: 'string',
      authorizerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

