// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * ***
   */
  streamlogUrl?: string;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * ***
   */
  token?: string;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * ***
   */
  url?: string;
  /**
   * @remarks
   * URL for logging on to the container using Workbench.
   */
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

