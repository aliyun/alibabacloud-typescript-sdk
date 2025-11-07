// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyPersonasProvinceStatisticsResponseBodyResultObjectItems extends $dara.Model {
  /**
   * @remarks
   * Total number of devices in the province.
   * 
   * @example
   * 5
   */
  provinceCnt?: number;
  /**
   * @remarks
   * Province name.
   * 
   * @example
   * 浙江
   */
  provinceName?: string;
  /**
   * @remarks
   * Percentage of the total for this province.
   * 
   * @example
   * 35.71
   */
  provinceRate?: string;
  static names(): { [key: string]: string } {
    return {
      provinceCnt: 'ProvinceCnt',
      provinceName: 'ProvinceName',
      provinceRate: 'ProvinceRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceCnt: 'number',
      provinceName: 'string',
      provinceRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyPersonasProvinceStatisticsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Total number of devices.
   * 
   * @example
   * 30
   */
  allUserCnt?: number;
  /**
   * @remarks
   * Data items.
   */
  items?: DescribeVerifyPersonasProvinceStatisticsResponseBodyResultObjectItems[];
  static names(): { [key: string]: string } {
    return {
      allUserCnt: 'AllUserCnt',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allUserCnt: 'number',
      items: { 'type': 'array', 'itemType': DescribeVerifyPersonasProvinceStatisticsResponseBodyResultObjectItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyPersonasProvinceStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * D9821F95-CC18-5439-BB1C-21A0FF0C2003
   */
  requestId?: string;
  /**
   * @remarks
   * Query result.
   */
  resultObject?: DescribeVerifyPersonasProvinceStatisticsResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVerifyPersonasProvinceStatisticsResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

