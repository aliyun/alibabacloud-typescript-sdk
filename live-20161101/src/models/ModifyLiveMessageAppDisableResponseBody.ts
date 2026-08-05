// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageAppDisableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The signature of the interactive messaging application. It is required by the interactive messaging SDK.
   * 
   * @example
   * ********************
   */
  appSign?: string;
  /**
   * @remarks
   * Indicates whether the interactive messaging application is disabled.
   * 
   * @example
   * true
   */
  disable?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6AA1AE11-EA78-1FD4-A966-6BA84307****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSign: 'AppSign',
      disable: 'Disable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSign: 'string',
      disable: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

