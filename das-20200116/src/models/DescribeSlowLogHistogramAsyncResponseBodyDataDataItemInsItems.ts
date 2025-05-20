// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogHistogramAsyncResponseBodyDataDataItemInsItems extends $dara.Model {
  count?: number[];
  /**
   * @example
   * 2492
   */
  insId?: string;
  /**
   * @example
   * userAdmin
   */
  insRole?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      insId: 'InsId',
      insRole: 'InsRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: { 'type': 'array', 'itemType': 'number' },
      insId: 'string',
      insRole: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

