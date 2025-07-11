// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVisitUasResponseBodyUas extends $dara.Model {
  /**
   * @remarks
   * The number of requests that use the user agent.
   * 
   * @example
   * 698455
   */
  count?: number;
  /**
   * @remarks
   * The user agent.
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
   * The ID of the request.
   * 
   * @example
   * 2847CE98-AFAE-5A64-B80E-60461717F9DE
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 user agents that are used to initiate requests.
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

