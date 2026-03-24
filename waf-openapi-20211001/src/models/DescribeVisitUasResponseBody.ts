// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVisitUasResponseBodyUas extends $dara.Model {
  /**
   * @remarks
   * The total number of requests from the User-Agent.
   * 
   * @example
   * 698455
   */
  count?: number;
  /**
   * @remarks
   * The User-Agent.
   * 
   * @example
   * chrome
   */
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitUasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2847CE98-AFAE-5A64-B80E-60461717F9DE
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 User-Agents.
   */
  uas?: DescribeVisitUasResponseBodyUas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uas: 'Uas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uas: { 'type': 'array', 'itemType': DescribeVisitUasResponseBodyUas },
    };
  }

  validate() {
    if(Array.isArray(this.uas)) {
      $dara.Model.validateArray(this.uas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

