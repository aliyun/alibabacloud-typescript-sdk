// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaSearchPageListResponseBodyItemsRequest extends $dara.Model {
  vehicleNum?: string;
  /**
   * @example
   * 52
   */
  vehicleType?: string;
  vehicleTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
      vehicleTypeName: 'VehicleTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vehicleNum: 'string',
      vehicleType: 'string',
      vehicleTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaSearchPageListResponseBodyItemsResponseData extends $dara.Model {
  /**
   * @example
   * 5
   */
  approvedCount?: string;
  /**
   * @example
   * 0
   */
  approvedLoad?: string;
  /**
   * @example
   * 2
   */
  axleCount?: string;
  /**
   * @example
   * 1630
   */
  backWheelDistance?: string;
  /**
   * @example
   * 622848001714440xxxx
   */
  bankCard?: string;
  /**
   * @example
   * 2
   */
  bizCode?: string;
  brand?: string;
  color?: string;
  /**
   * @example
   * 0
   */
  displacement?: string;
  /**
   * @example
   * N7YJ113PA
   */
  engineNum?: string;
  /**
   * @example
   * CA6GV30TD
   */
  engineType?: string;
  /**
   * @example
   * 1630
   */
  frontWheelDistance?: string;
  fuelType?: string;
  /**
   * @example
   * 2026-07-31 00:00:00
   */
  inspectionDate?: string;
  /**
   * @example
   * HQ7002BEV67
   */
  modelNum?: string;
  /**
   * @example
   * 120
   */
  power?: string;
  /**
   * @example
   * 2015-08-24 00:00:00
   */
  registrationDate?: string;
  /**
   * @example
   * 2022-08-13 00:00:00
   */
  releaseDate?: string;
  /**
   * @example
   * 2099-12-31 00:00:00
   */
  retirementDate?: string;
  /**
   * @example
   * 2350
   */
  totalMass?: string;
  type?: string;
  /**
   * @example
   * 1900
   */
  unladenMass?: string;
  /**
   * @example
   * 0
   */
  useProperty?: string;
  vehicleState?: string;
  /**
   * @example
   * LDC643T44G3667219
   */
  vin?: string;
  /**
   * @example
   * 2750
   */
  wheelBase?: string;
  static names(): { [key: string]: string } {
    return {
      approvedCount: 'ApprovedCount',
      approvedLoad: 'ApprovedLoad',
      axleCount: 'AxleCount',
      backWheelDistance: 'BackWheelDistance',
      bankCard: 'BankCard',
      bizCode: 'BizCode',
      brand: 'Brand',
      color: 'Color',
      displacement: 'Displacement',
      engineNum: 'EngineNum',
      engineType: 'EngineType',
      frontWheelDistance: 'FrontWheelDistance',
      fuelType: 'FuelType',
      inspectionDate: 'InspectionDate',
      modelNum: 'ModelNum',
      power: 'Power',
      registrationDate: 'RegistrationDate',
      releaseDate: 'ReleaseDate',
      retirementDate: 'RetirementDate',
      totalMass: 'TotalMass',
      type: 'Type',
      unladenMass: 'UnladenMass',
      useProperty: 'UseProperty',
      vehicleState: 'VehicleState',
      vin: 'Vin',
      wheelBase: 'WheelBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedCount: 'string',
      approvedLoad: 'string',
      axleCount: 'string',
      backWheelDistance: 'string',
      bankCard: 'string',
      bizCode: 'string',
      brand: 'string',
      color: 'string',
      displacement: 'string',
      engineNum: 'string',
      engineType: 'string',
      frontWheelDistance: 'string',
      fuelType: 'string',
      inspectionDate: 'string',
      modelNum: 'string',
      power: 'string',
      registrationDate: 'string',
      releaseDate: 'string',
      retirementDate: 'string',
      totalMass: 'string',
      type: 'string',
      unladenMass: 'string',
      useProperty: 'string',
      vehicleState: 'string',
      vin: 'string',
      wheelBase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaSearchPageListResponseBodyItemsResponse extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeMetaSearchPageListResponseBodyItemsResponseData;
  /**
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeMetaSearchPageListResponseBodyItemsResponseData,
      message: 'string',
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

export class DescribeMetaSearchPageListResponseBodyItems extends $dara.Model {
  /**
   * @example
   * ID_CARD_2_META
   */
  api?: string;
  apiName?: string;
  /**
   * @example
   * 6214837145546986
   */
  bankCard?: string;
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * 2025-10-17 10:00:11
   */
  date?: string;
  /**
   * @example
   * 4****************X
   */
  identifyNum?: string;
  /**
   * @example
   * CUCC
   */
  ispName?: string;
  /**
   * @example
   * 1500000xxxx
   */
  mobile?: string;
  request?: DescribeMetaSearchPageListResponseBodyItemsRequest;
  /**
   * @example
   * B0102BEF-4411-57C3-860D-CFE7DE0A64C0
   */
  requestId?: string;
  requestJson?: string;
  response?: DescribeMetaSearchPageListResponseBodyItemsResponse;
  responseJson?: string;
  /**
   * @example
   * 207
   */
  subCode?: string;
  userName?: string;
  vehicleNum?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      apiName: 'ApiName',
      bankCard: 'BankCard',
      bizCode: 'BizCode',
      date: 'Date',
      identifyNum: 'IdentifyNum',
      ispName: 'IspName',
      mobile: 'Mobile',
      request: 'Request',
      requestId: 'RequestId',
      requestJson: 'RequestJson',
      response: 'Response',
      responseJson: 'ResponseJson',
      subCode: 'SubCode',
      userName: 'UserName',
      vehicleNum: 'VehicleNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiName: 'string',
      bankCard: 'string',
      bizCode: 'string',
      date: 'string',
      identifyNum: 'string',
      ispName: 'string',
      mobile: 'string',
      request: DescribeMetaSearchPageListResponseBodyItemsRequest,
      requestId: 'string',
      requestJson: 'string',
      response: DescribeMetaSearchPageListResponseBodyItemsResponse,
      responseJson: 'string',
      subCode: 'string',
      userName: 'string',
      vehicleNum: 'string',
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaSearchPageListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeMetaSearchPageListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5176EB42-6EE7-510B-9388-35018DF3175B
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @example
   * 0
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeMetaSearchPageListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
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

