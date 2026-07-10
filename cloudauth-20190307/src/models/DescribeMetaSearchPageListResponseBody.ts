// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaSearchPageListResponseBodyItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The vehicle number.
   * 
   * @example
   * 浙J3H91H
   */
  vehicleNum?: string;
  /**
   * @remarks
   * The vehicle type. Valid values:
   * - **01**: large vehicle  
   * - **02**: small vehicle  
   * - **03**: embassy vehicle  
   * - **04**: consulate vehicle  
   * - **05**: overseas vehicle  
   * - **06**: foreign vehicle  
   * - **07**: standard motorcycle  
   * - **08**: light motorcycle  
   * - **09**: embassy motorcycle  
   * - **10**: consulate motorcycle  
   * - **11**: overseas motorcycle  
   * - **12**: foreign motorcycle  
   * - **13**: low-speed vehicle  
   * - **14**: tractor  
   * - **15**: trailer  
   * - **16**: training vehicle  
   * - **17**: training motorcycle  
   * - **20**: temporary entry vehicle  
   * - **21**: temporary entry motorcycle  
   * - **22**: temporary driving vehicle  
   * - **23**: police vehicle  
   * - **24**: police motorcycle  
   * - **51**: new energy large vehicle  
   * - **52**: new energy small vehicle.
   * 
   * @example
   * 52
   */
  vehicleType?: string;
  /**
   * @remarks
   * The vehicle type name.
   * 
   * @example
   * 新能源小型车
   */
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
   * @remarks
   * The approved number of passengers.
   * 
   * @example
   * 5
   */
  approvedCount?: string;
  /**
   * @remarks
   * The approved passenger capacity.
   * 
   * @example
   * 0
   */
  approvedLoad?: string;
  /**
   * @remarks
   * The number of axles.
   * 
   * @example
   * 2
   */
  axleCount?: string;
  /**
   * @remarks
   * The rear wheel track.
   * 
   * @example
   * 1630
   */
  backWheelDistance?: string;
  /**
   * @remarks
   * The bank card number.
   * 
   * @example
   * 622848001714440xxxx
   */
  bankCard?: string;
  /**
   * @remarks
   * The verification status. Valid values:
   * - **1**: Verification passed.
   * - **2**: Verification failed.
   * - **3**: No record found.
   * 
   * @example
   * 2
   */
  bizCode?: string;
  /**
   * @remarks
   * The brand name.
   * 
   * @example
   * 奔驰
   */
  brand?: string;
  /**
   * @remarks
   * The body color.
   * 
   * @example
   * 白
   */
  color?: string;
  /**
   * @remarks
   * The displacement.
   * 
   * @example
   * 0
   */
  displacement?: string;
  /**
   * @remarks
   * The engine number.
   * 
   * @example
   * N7YJ113PA
   */
  engineNum?: string;
  /**
   * @remarks
   * The engine model.
   * 
   * @example
   * CA6GV30TD
   */
  engineType?: string;
  /**
   * @remarks
   * The front wheel track.
   * 
   * @example
   * 1630
   */
  frontWheelDistance?: string;
  /**
   * @remarks
   * The fuel type.
   * 
   * @example
   * 电
   */
  fuelType?: string;
  /**
   * @remarks
   * The inspection validity expiration date.
   * 
   * @example
   * 2026-07-31 00:00:00
   */
  inspectionDate?: string;
  /**
   * @remarks
   * The vehicle model number.
   * 
   * @example
   * HQ7002BEV67
   */
  modelNum?: string;
  /**
   * @remarks
   * The power.
   * 
   * @example
   * 120
   */
  power?: string;
  /**
   * @remarks
   * The initial registration date.
   * 
   * @example
   * 2015-08-24 00:00:00
   */
  registrationDate?: string;
  /**
   * @remarks
   * The manufacturing date.
   * 
   * @example
   * 2022-08-13 00:00:00
   */
  releaseDate?: string;
  /**
   * @remarks
   * The mandatory retirement date.
   * 
   * @example
   * 2099-12-31 00:00:00
   */
  retirementDate?: string;
  /**
   * @remarks
   * The gross mass.
   * 
   * @example
   * 2350
   */
  totalMass?: string;
  /**
   * @remarks
   * The vehicle type.
   * 
   * @example
   * 小型轿车
   */
  type?: string;
  /**
   * @remarks
   * The curb weight.
   * 
   * @example
   * 1900
   */
  unladenMass?: string;
  /**
   * @remarks
   * The usage property.
   * 
   * @example
   * 0
   */
  useProperty?: string;
  /**
   * @remarks
   * The motor vehicle status.
   * 
   * @example
   * 正常
   */
  vehicleState?: string;
  /**
   * @remarks
   * The vehicle identification number (VIN).
   * 
   * @example
   * LDC643T44G3667219
   */
  vin?: string;
  /**
   * @remarks
   * The wheelbase.
   * 
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
   * @remarks
   * The HTTP return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeMetaSearchPageListResponseBodyItemsResponseData;
  /**
   * @remarks
   * The message.
   * 
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
   * @remarks
   * The product API. Valid values:
   * - **ID_CARD_2_META**: ID card two-element verification
   * - **ID_PERIOD**: ID card validity period verification
   * - **MOBILE_ONLINE_LENGTH**: mobile number online duration
   * - **MOBILE_ONLINE_STATUS**: mobile number online status
   * - **MOBILE_3_META_SIMPLE**: mobile number three-element verification (simple edition)
   * - **MOBILE_3_META**: mobile number three-element verification (detailed edition)
   * - **MOBILE_2_META**: mobile number two-element verification
   * - **BANK_CARD_N_META**: bank card verification (detailed edition)
   * - **MOBILE_DETECT**: phone number detection 
   * - **VEHICLE_N_META**: vehicle element verification (enhanced edition)
   * - **VEHICLE_PENTA_INFO**: vehicle five-element information recognition
   * - **VEHICLE_LICENSE_INFO**: vehicle information recognition
   * - **VEHICLE_INSURE_DATE**: vehicle insurance date query
   * - **VEHICLE_CHECK**: vehicle element verification.
   * 
   * @example
   * ID_CARD_2_META
   */
  api?: string;
  /**
   * @remarks
   * The name corresponding to the API. Valid values:
   * - **ID_CARD_2_META**: ID card two-element verification
   * - **ID_PERIOD**: ID card validity period verification
   * - **MOBILE_ONLINE_LENGTH**: mobile number online duration
   * - **MOBILE_ONLINE_STATUS**: mobile number online status
   * - **MOBILE_3_META_SIMPLE**: mobile number three-element verification (simple edition)
   * - **MOBILE_3_META**: mobile number three-element verification (detailed edition)
   * - **MOBILE_2_META**: mobile number two-element verification
   * - **BANK_CARD_N_META**: bank card verification (detailed edition)
   * - **MOBILE_DETECT**: phone number detection 
   * - **VEHICLE_N_META**: vehicle element verification (enhanced edition)
   * - **VEHICLE_PENTA_INFO**: vehicle five-element information recognition
   * - **VEHICLE_LICENSE_INFO**: vehicle information recognition
   * - **VEHICLE_INSURE_DATE**: vehicle insurance date query
   * - **VEHICLE_CHECK**: vehicle element verification.
   * 
   * @example
   * 身份证二要素
   */
  apiName?: string;
  /**
   * @remarks
   * The bank card ID.
   * 
   * @example
   * 6214837145546986
   */
  bankCard?: string;
  /**
   * @remarks
   * The verification status. Valid values:
   * - **1**: Verification passed.
   * - **2**: Verification failed.
   * - **3**: No record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The verification date.
   * 
   * @example
   * 2025-10-17 10:00:11
   */
  date?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 4****************X
   */
  identifyNum?: string;
  /**
   * @remarks
   * The name of the telecommunications service provider. Valid values:
   * - **CMCC**: China Mobile
   * - **CUCC**: China Unicom
   * - **CTCC**: China Telecom.
   * 
   * @example
   * CUCC
   */
  ispName?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1500000xxxx
   */
  mobile?: string;
  /**
   * @remarks
   * The request parameters.
   */
  request?: DescribeMetaSearchPageListResponseBodyItemsRequest;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0102BEF-4411-57C3-860D-CFE7DE0A64C0
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP request parameters.
   * 
   * @example
   * {\\"productCode\\":\\"cloudauth_infoverify_public_cn\\",\\"identifyNum\\":\\"4****************X\\",\\"userName\\":\\"**豪\\",\\"userId\\":\\"12600512516xxxxx\\"}
   */
  requestJson?: string;
  /**
   * @remarks
   * The response content.
   */
  response?: DescribeMetaSearchPageListResponseBodyItemsResponse;
  /**
   * @remarks
   * The response content.
   * 
   * @example
   * {\\"code\\":\\"200\\",\\"data\\":{\\"bizCode\\":\\"1\\",\\"ispName\\":\\"CMCC\\",\\"subCode\\":\\"101\\"},\\"message\\":\\"调用成功\\"}
   */
  responseJson?: string;
  /**
   * @remarks
   * The result code. For more information, see [official documentation](https://www.alibabacloud.com/help/en/id-verification/information-verification/).
   * 
   * @example
   * 207
   */
  subCode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * **豪
   */
  userName?: string;
  /**
   * @remarks
   * The vehicle number.
   * 
   * @example
   * 浙J3H91H
   */
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The paginated list data.
   */
  items?: DescribeMetaSearchPageListResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 5176EB42-6EE7-510B-9388-35018DF3175B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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

