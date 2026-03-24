// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @example
   * ***
   */
  streamlogUrl?: string;
  /**
   * @example
   * ***
   */
  token?: string;
  /**
   * @example
   * ***
   */
  url?: string;
  workbenchUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamlogUrl: 'StreamlogUrl',
      token: 'Token',
      url: 'Url',
      workbenchUrl: 'WorkbenchUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamlogUrl: 'string',
      token: 'string',
      url: 'string',
      workbenchUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

