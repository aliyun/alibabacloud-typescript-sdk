// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppLiveStreamStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. You can create and query it in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * Idempotency parameter
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726xxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

