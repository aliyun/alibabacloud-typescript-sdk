// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomerModuleBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Authorization type.
   * 
   * @example
   * READ
   */
  authType?: string;
  /**
   * @remarks
   * Customer model ID
   * 
   * @example
   * 1
   */
  customerModuleId?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      customerModuleId: 'CustomerModuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      customerModuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

