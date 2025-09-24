// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRIUtilizationDetailResponseBodyDataDetailListDetailList extends $dara.Model {
  /**
   * @remarks
   * The time when the fees are deducted by using the RI.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  deductDate?: string;
  /**
   * @remarks
   * The total amount of computing power of the RI or capacity of SCU in the time period.
   * 
   * @example
   * 1
   */
  deductFactorTotal?: number;
  /**
   * @remarks
   * The deduct factor. This parameter is returned only if the RICommodityCode parameter is set to ecsRi.
   * 
   * @example
   * 24
   */
  deductHours?: string;
  /**
   * @remarks
   * The computing power or capacity of the pay-as-you-go instance whose fees are deducted by using the RI.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The code of the service whose fees are deducted by using the RI.
   * 
   * @example
   * rds
   */
  deductedCommodityCode?: string;
  /**
   * @remarks
   * The ID of the instance whose fees are deducted by using the RI.
   * 
   * @example
   * safdffghfgh
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The name of the service whose fees are deducted by using the RI.
   * 
   * @example
   * ApsaraDB RDS
   */
  deductedProductDetail?: string;
  /**
   * @remarks
   * The instance type of the instance whose fees are deducted by using the RI.
   * 
   * @example
   * rds.mysql.s3.large
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The ID of the RI.
   * 
   * @example
   * 324253645
   */
  RIInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deductDate: 'DeductDate',
      deductFactorTotal: 'DeductFactorTotal',
      deductHours: 'DeductHours',
      deductQuantity: 'DeductQuantity',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      deductedProductDetail: 'DeductedProductDetail',
      instanceSpec: 'InstanceSpec',
      RIInstanceId: 'RIInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductDate: 'string',
      deductFactorTotal: 'number',
      deductHours: 'string',
      deductQuantity: 'number',
      deductedCommodityCode: 'string',
      deductedInstanceId: 'string',
      deductedProductDetail: 'string',
      instanceSpec: 'string',
      RIInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyDataDetailList extends $dara.Model {
  detailList?: QueryRIUtilizationDetailResponseBodyDataDetailListDetailList[];
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': QueryRIUtilizationDetailResponseBodyDataDetailListDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.detailList)) {
      $dara.Model.validateArray(this.detailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage details of the RI.
   */
  detailList?: QueryRIUtilizationDetailResponseBodyDataDetailList;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: QueryRIUtilizationDetailResponseBodyDataDetailList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.detailList && typeof (this.detailList as any).validate === 'function') {
      (this.detailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryRIUtilizationDetailResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DF58589C-A06C-4224-8615-7797E6474FA3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRIUtilizationDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

