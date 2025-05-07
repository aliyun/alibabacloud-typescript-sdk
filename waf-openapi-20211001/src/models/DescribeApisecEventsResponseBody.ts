// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisecEventsResponseBodyData } from "./DescribeApisecEventsResponseBodyData";


export class DescribeApisecEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The security events.
   */
  data?: DescribeApisecEventsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12F4CC8F-7E9F-5E4D-BF7C-BD1EDDE0C282
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecEventsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

