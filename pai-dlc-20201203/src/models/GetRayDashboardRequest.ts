// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the link is a sharing link. If yes, a token is required.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @remarks
   * The token obtained from GetToken
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

