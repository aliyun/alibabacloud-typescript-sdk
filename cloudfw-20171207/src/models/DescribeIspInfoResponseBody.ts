// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspInfoResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * isp-dhyw2lxfpc****
   */
  ispId?: number;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      ispId: 'IspId',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispId: 'number',
      ispName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspInfoResponseBody extends $dara.Model {
  dataList?: DescribeIspInfoResponseBodyDataList[];
  /**
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeIspInfoResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
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

