// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppViewStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can create and find the application ID in the console. Only one ID can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
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

