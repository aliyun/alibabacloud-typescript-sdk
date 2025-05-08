// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The operating system (OS). You can specify only one OS in a request. If you do not specify a value for this parameter, images for all supported OSs are queried. Valid values:
   * 
   * *   linux
   * *   windows
   * 
   * @example
   * linux
   */
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

