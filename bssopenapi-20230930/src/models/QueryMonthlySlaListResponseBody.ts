// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonthlySlaListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The service availability.
   * 
   * @example
   * 99.9155
   */
  availableRate?: number;
  /**
   * @remarks
   * The unique ID of the damage record, used for targeted claims.
   * 
   * @example
   * 9b7***9413
   */
  damagedId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * OSSBAG-cn-0xl0n****003
   */
  instanceId?: string;
  /**
   * @remarks
   * The month in yyyyMM format.
   * 
   * @example
   * 202603
   */
  month?: number;
  /**
   * @remarks
   * The monthly service fee.
   * 
   * @example
   * 365.00
   */
  monthlyServiceCharge?: number;
  /**
   * @remarks
   * The compensation description.
   * 
   * @example
   * SLA compensation
   */
  payDescription?: string;
  /**
   * @remarks
   * The compensation ratio, in percentage (%).
   * 
   * @example
   * 10
   */
  payRate?: number;
  /**
   * @remarks
   * The compensation status. Valid values:
   * - 0: not compensated.
   * - 1: compensated.
   * - 2: no compensation required.
   * 
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The compensation amount that should be paid.
   * 
   * @example
   * 36.5
   */
  shouldPaySum?: number;
  static names(): { [key: string]: string } {
    return {
      availableRate: 'AvailableRate',
      damagedId: 'DamagedId',
      instanceId: 'InstanceId',
      month: 'Month',
      monthlyServiceCharge: 'MonthlyServiceCharge',
      payDescription: 'PayDescription',
      payRate: 'PayRate',
      payStatus: 'PayStatus',
      productCode: 'ProductCode',
      shouldPaySum: 'ShouldPaySum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableRate: 'number',
      damagedId: 'string',
      instanceId: 'string',
      month: 'number',
      monthlyServiceCharge: 'number',
      payDescription: 'string',
      payRate: 'number',
      payStatus: 'number',
      productCode: 'string',
      shouldPaySum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlySlaListResponseBody extends $dara.Model {
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
   * The data list.
   */
  data?: QueryMonthlySlaListResponseBodyData[];
  /**
   * @remarks
   * The response struct metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
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
   * The request ID.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QueryMonthlySlaListResponseBodyData },
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

