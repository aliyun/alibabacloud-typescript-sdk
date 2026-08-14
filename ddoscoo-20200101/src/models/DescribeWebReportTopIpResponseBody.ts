// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebReportTopIpResponseBodyDataList extends $dara.Model {
  areaId?: string;
  count?: number;
  isp?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      count: 'Count',
      isp: 'Isp',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      count: 'number',
      isp: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebReportTopIpResponseBody extends $dara.Model {
  dataList?: DescribeWebReportTopIpResponseBodyDataList[];
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

