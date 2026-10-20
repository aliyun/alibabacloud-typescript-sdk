// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The operating system type. Only a single type can be specified. If this parameter is not specified, all types are queried.
   * 
   * Valid values:
   * 
   * - Linux
   * 
   * - windows
   * 
   * In practice, passing linux or Linux may return an empty list, whereas omitting this parameter can return images with an OSType of linux. Verify the actual results before relying on this filter.
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

