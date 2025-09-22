// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @example
   * some_token_value
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      isShared: 'isShared',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShared: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

