// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTopResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * US
   */
  dataName?: string;
  /**
   * @example
   * 47.12
   */
  dataValue?: string;
  /**
   * @example
   * false
   */
  isSubscribed?: boolean;
  labelList?: string[];
  /**
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @example
   * 0
   */
  totalBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dataName: 'DataName',
      dataValue: 'DataValue',
      isSubscribed: 'IsSubscribed',
      labelList: 'LabelList',
      sessionCount: 'SessionCount',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataName: 'string',
      dataValue: 'string',
      isSubscribed: 'boolean',
      labelList: { 'type': 'array', 'itemType': 'string' },
      sessionCount: 'number',
      totalBytes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelList)) {
      $dara.Model.validateArray(this.labelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetTrafficTopResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  dataCount?: number;
  dataList?: DescribeInternetTrafficTopResponseBodyDataList[];
  /**
   * @example
   * in_src_ip
   */
  dataType?: string;
  /**
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataList: 'DataList',
      dataType: 'DataType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataList: { 'type': 'array', 'itemType': DescribeInternetTrafficTopResponseBodyDataList },
      dataType: 'string',
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

