// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppCallbackSecretKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. You can create and query it in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

