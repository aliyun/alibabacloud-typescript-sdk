// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebReportTopIpResponseBodyDataList } from "./DescribeWebReportTopIpResponseBodyDataList";


export class DescribeWebReportTopIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the IP addresses.
   */
  dataList?: DescribeWebReportTopIpResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D21BE0C4-8E83-5E32-86C6-AA6BE9B1B5BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeWebReportTopIpResponseBodyDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

