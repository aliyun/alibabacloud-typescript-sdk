// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkTrafficTopRatioResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The data name.
   * 
   * @example
   * test
   */
  dataName?: string;
  /**
   * @remarks
   * The ratio.
   * 
   * @example
   * 12
   */
  dataValue?: string;
  static names(): { [key: string]: string } {
    return {
      dataName: 'DataName',
      dataValue: 'DataValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataName: 'string',
      dataValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkTrafficTopRatioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of results returned.
   * 
   * @example
   * 1
   */
  dataCount?: number;
  /**
   * @remarks
   * The list of data values.
   */
  dataList?: DescribeNetworkTrafficTopRatioResponseBodyDataList[];
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * in_src_ip
   */
  dataType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C05D58A1-28A9-563A-BB59-5F7D1867****
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
      dataList: { 'type': 'array', 'itemType': DescribeNetworkTrafficTopRatioResponseBodyDataList },
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

