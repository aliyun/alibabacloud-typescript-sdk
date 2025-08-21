// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionIspsResponseBodyIsps extends $dara.Model {
  /**
   * @remarks
   * The code of the ISP.
   * 
   * @example
   * cmcc
   */
  code?: string;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * move
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

