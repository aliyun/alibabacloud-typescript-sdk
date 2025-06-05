// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupEventsResponseBodyData } from "./DescribeContainerGroupEventsResponseBodyData";


export class DescribeContainerGroupEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the events.
   */
  data?: DescribeContainerGroupEventsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1340C38D-6189-54D1-86F6-7D5ECF3E0088
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries of returned events.
   * 
   * @example
   * 10
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
      data: { 'type': 'array', 'itemType': DescribeContainerGroupEventsResponseBodyData },
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

