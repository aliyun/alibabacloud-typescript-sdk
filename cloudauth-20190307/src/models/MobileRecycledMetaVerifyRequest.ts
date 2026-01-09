// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecycledMetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  registerDate?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
      registerDate: 'RegisterDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      paramType: 'string',
      registerDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

