// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceAndSceneRequest extends $dara.Model {
  /**
   * @example
   * READ
   */
  authType?: string;
  /**
   * @example
   * 456
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

