// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerCollectDataResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * Vv
   */
  metric?: string;
  /**
   * @example
   * 100.0
   */
  value?: number;
  /**
   * @example
   * 0.5
   */
  valueRatio?: number;
  /**
   * @example
   * 200.0
   */
  valueRefer?: number;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      value: 'Value',
      valueRatio: 'ValueRatio',
      valueRefer: 'ValueRefer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      value: 'number',
      valueRatio: 'number',
      valueRefer: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodPlayerCollectDataResponseBody extends $dara.Model {
  dataList?: DescribeVodPlayerCollectDataResponseBodyDataList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
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
      dataList: { 'type': 'array', 'itemType': DescribeVodPlayerCollectDataResponseBodyDataList },
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

