// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceHttpCodeResponseBodyInstanceHttpCodeMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 404
   */
  itemTime?: string;
  /**
   * @remarks
   * The corresponding value.
   * 
   * @example
   * 1
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTime: 'string',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

