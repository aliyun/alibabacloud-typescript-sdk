// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * AppKey。
   * 
   * @example
   * ba133b2cee4ab9be424674892c33****
   */
  appKey?: string;
  /**
   * @example
   * 154EF5DE-3D08-1F2C-A482-281F78D74B7C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
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

