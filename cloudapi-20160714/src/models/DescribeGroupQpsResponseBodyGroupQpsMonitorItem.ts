// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupQpsResponseBodyGroupQpsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The point in time.
   * 
   * @example
   * 2023-08-02T09:15:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of requests at the specified point in time.
   * 
   * @example
   * 17
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

