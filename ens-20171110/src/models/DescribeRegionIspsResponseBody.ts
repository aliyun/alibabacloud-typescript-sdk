// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionIspsResponseBodyIsps } from "./DescribeRegionIspsResponseBodyIsps";


export class DescribeRegionIspsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ISPs.
   */
  isps?: DescribeRegionIspsResponseBodyIsps[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC90CC7E-23B6-5A90-9097-A17CE4A161C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribeRegionIspsResponseBodyIsps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.isps)) {
      $dara.Model.validateArray(this.isps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

