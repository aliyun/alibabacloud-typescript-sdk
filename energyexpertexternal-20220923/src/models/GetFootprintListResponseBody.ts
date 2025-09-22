// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFootprintListResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The amount of the product.
   * 
   * @example
   * 100.0000000000000000000000000
   */
  amount?: number;
  /**
   * @remarks
   * Authentication status enumeration value, please refer to [link](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Calculation end time.
   * 
   * @example
   * 2024/01/31
   */
  checkEndTime?: string;
  /**
   * @remarks
   * Calculation start time.
   * 
   * @example
   * 2024/01/01
   */
  checkStartTime?: string;
  /**
   * @remarks
   * The enterprise code.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The user who created it.
   * 
   * @example
   * Energy Expert
   */
  createdBy?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 1024
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the demo model is a built-in model. A value of 1 indicates a true value and a value of 0 indicates a false value.
   * 
   * @example
   * 1
   */
  isDemoModel?: number;
  /**
   * @remarks
   * The literal expression corresponding to lifeCycleType, `From Cradle to Gate` and `From Cradle to Grave`.
   * 
   * @example
   * From Cradle to Gate
   */
  lifeCycle?: string;
  /**
   * @remarks
   * 1 is `From Cradle to Gate`, and 2 is `From Cradle to Grave`.
   * 
   * @example
   * 1
   */
  lifeCycleType?: number;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * Carbon-footprint-demo
   */
  name?: string;
  /**
   * @remarks
   * Product category enumeration value, please refer to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 158-159
   */
  type?: string;
  /**
   * @remarks
   * Unit enumeration value. Please refer to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 1-4
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      authStatus: 'authStatus',
      checkEndTime: 'checkEndTime',
      checkStartTime: 'checkStartTime',
      code: 'code',
      createdBy: 'createdBy',
      id: 'id',
      isDemoModel: 'isDemoModel',
      lifeCycle: 'lifeCycle',
      lifeCycleType: 'lifeCycleType',
      name: 'name',
      type: 'type',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      authStatus: 'number',
      checkEndTime: 'string',
      checkStartTime: 'string',
      code: 'string',
      createdBy: 'string',
      id: 'number',
      isDemoModel: 'number',
      lifeCycle: 'string',
      lifeCycleType: 'number',
      name: 'string',
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Product Detail List.
   */
  records?: GetFootprintListResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  total?: number;
  /**
   * @remarks
   * Total Pages
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      total: 'total',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetFootprintListResponseBodyDataRecords },
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFootprintListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetFootprintListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 06DA2909-7736-5738-AA31-ACD617D828F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFootprintListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

