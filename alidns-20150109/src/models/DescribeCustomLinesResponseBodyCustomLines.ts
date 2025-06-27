// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomLinesResponseBodyCustomLinesIpSegmentList } from "./DescribeCustomLinesResponseBodyCustomLinesIpSegmentList";


export class DescribeCustomLinesResponseBodyCustomLines extends $dara.Model {
  /**
   * @remarks
   * The code of the custom line.
   * 
   * @example
   * hra0yc-597
   */
  code?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 597
   */
  id?: number;
  ipSegmentList?: DescribeCustomLinesResponseBodyCustomLinesIpSegmentList[];
  /**
   * @remarks
   * The name of the custom line.
   * 
   * @example
   * hra0yd-597
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      ipSegmentList: 'IpSegmentList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      ipSegmentList: { 'type': 'array', 'itemType': DescribeCustomLinesResponseBodyCustomLinesIpSegmentList },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipSegmentList)) {
      $dara.Model.validateArray(this.ipSegmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

