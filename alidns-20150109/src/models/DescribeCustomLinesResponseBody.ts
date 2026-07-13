// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLinesResponseBodyCustomLinesIpSegmentList extends $dara.Model {
  /**
   * @remarks
   * The end IP address.
   * 
   * @example
   * 1.1.XX.XX
   */
  endIp?: string;
  /**
   * @remarks
   * The start IP address.
   * 
   * @example
   * 1.2.XX.XX
   */
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      startIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBodyCustomLines extends $dara.Model {
  /**
   * @remarks
   * The code of the custom line.
   * 
   * @example
   * hra0yc-5********
   */
  code?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 5*********
   */
  id?: number;
  /**
   * @remarks
   * The list of IP address range. Use a hyphen (-) to separate the start and end IP address ranges. Enter one range per line. You can specify 1 to 50 lines. For a single IP address, enter it as IP1-IP1. IP address ranges cannot overlap.
   */
  ipSegmentList?: DescribeCustomLinesResponseBodyCustomLinesIpSegmentList[];
  /**
   * @remarks
   * The name of the line.
   * 
   * @example
   * hra0yd-5********
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

export class DescribeCustomLinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom lines.
   */
  customLines?: DescribeCustomLinesResponseBodyCustomLines[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of custom lines.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      customLines: 'CustomLines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLines: { 'type': 'array', 'itemType': DescribeCustomLinesResponseBodyCustomLines },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customLines)) {
      $dara.Model.validateArray(this.customLines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

