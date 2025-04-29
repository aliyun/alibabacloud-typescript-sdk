// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppSecuritiesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 110862931
   */
  appId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

