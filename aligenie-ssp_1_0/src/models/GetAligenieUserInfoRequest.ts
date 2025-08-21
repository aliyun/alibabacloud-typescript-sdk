// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAligenieUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99ce8a70c23a94f8569e1a525bef6e85
   */
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginStateAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

