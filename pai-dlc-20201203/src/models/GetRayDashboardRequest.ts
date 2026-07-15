// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * Set to true to generate a shareable link. If you set this parameter to true, you must also specify the token parameter.
   * 
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @remarks
   * The token returned by GetToken
   * 
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

