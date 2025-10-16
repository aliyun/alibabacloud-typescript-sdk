// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionInfoResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionInfoResponseBody extends $dara.Model {
  dataList?: DescribeRegionInfoResponseBodyDataList[];
  /**
   * @example
   * 25E655B0-CAED-53D4-8054-F983126****
   */
  requestId?: string;
  /**
   * @example
   * 8
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
      dataList: { 'type': 'array', 'itemType': DescribeRegionInfoResponseBodyDataList },
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

