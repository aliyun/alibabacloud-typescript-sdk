// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDPUtilizationDetailResponseBodyDataDetailListDetailList extends $dara.Model {
  /**
   * @remarks
   * The deduction date.
   * 
   * @example
   * 2019/5/23 12:00
   */
  deductDate?: string;
  /**
   * @remarks
   * The total computing capacity or storage capacity of the RI or SCU during the deduction.
   * 
   * @example
   * 1
   */
  deductFactorTotal?: number;
  /**
   * @remarks
   * The deduct factor. This parameter is returned only if the CommodityCode parameter is set to ecsRi.
   * 
   * @example
   * 24
   */
  deductHours?: number;
  /**
   * @remarks
   * The original measured amount.
   * 
   * @example
   * 1
   */
  deductMeasure?: number;
  /**
   * @remarks
   * The computing capacity or storage capacity that is deducted in a pay-as-you-go instance.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The code of the deducted service.
   * 
   * @example
   * rds
   */
  deductedCommodityCode?: string;
  /**
   * @remarks
   * The ID of the deducted instance.
   * 
   * @example
   * oss-123123
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The name of the deducted service.
   * 
   * @example
   * ApsaraDB RDS
   */
  deductedProductDetail?: string;
  /**
   * @remarks
   * The ID of the RI.
   * 
   * @example
   * oss-123123
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the deducted instance.
   * 
   * @example
   * rds.mysql.s3.large
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The region in which the instance resides. This parameter can be left empty.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The billable item.
   * 
   * @example
   * PutRequest
   */
  resCode?: string;
  /**
   * @remarks
   * The UID of the deducted instance.
   * 
   * *   If the deduction is shared, the value of this parameter indicates the UID of the deducted instance.
   * *   If the deduction is not shared, the value of this parameter is the same as that of the uid parameter.
   * 
   * @example
   * 1111111111
   */
  shareUid?: number;
  /**
   * @remarks
   * The UID of the deducted instance.
   * 
   * @example
   * 1111111111
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      deductDate: 'DeductDate',
      deductFactorTotal: 'DeductFactorTotal',
      deductHours: 'DeductHours',
      deductMeasure: 'DeductMeasure',
      deductQuantity: 'DeductQuantity',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      deductedProductDetail: 'DeductedProductDetail',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      region: 'Region',
      resCode: 'ResCode',
      shareUid: 'ShareUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductDate: 'string',
      deductFactorTotal: 'number',
      deductHours: 'number',
      deductMeasure: 'number',
      deductQuantity: 'number',
      deductedCommodityCode: 'string',
      deductedInstanceId: 'string',
      deductedProductDetail: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      region: 'string',
      resCode: 'string',
      shareUid: 'number',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBodyDataDetailList extends $dara.Model {
  detailList?: QueryDPUtilizationDetailResponseBodyDataDetailListDetailList[];
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': QueryDPUtilizationDetailResponseBodyDataDetailListDetailList },
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

export class QueryDPUtilizationDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The detailed resource plan usage.
   */
  detailList?: QueryDPUtilizationDetailResponseBodyDataDetailList;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You can set the LastToken parameter to this value in the next request. If null is returned, all results are queried.
   * 
   * @example
   * CAESF***zNTAw
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: QueryDPUtilizationDetailResponseBodyDataDetailList,
      nextToken: 'string',
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

export class QueryDPUtilizationDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryDPUtilizationDetailResponseBodyData;
  /**
   * @remarks
   * The error message.
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
   * Indicates whether the request is successful.
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
      data: QueryDPUtilizationDetailResponseBodyData,
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

