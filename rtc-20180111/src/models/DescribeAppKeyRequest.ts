// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. You can create and query this ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 0cho****
   */
  appId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

