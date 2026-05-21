// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonthlySlaListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 99.9155
   */
  availableRate?: number;
  /**
   * @example
   * 9b7***9413
   */
  damagedId?: string;
  /**
   * @example
   * OSSBAG-cn-0xl0n****003
   */
  instanceId?: string;
  /**
   * @example
   * 202603
   */
  month?: number;
  /**
   * @example
   * 365.00
   */
  monthlyServiceCharge?: number;
  /**
   * @example
   * SLApei f
   */
  payDescription?: string;
  /**
   * @example
   * 10
   */
  payRate?: number;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * oss
   */
  productCode?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  data?: QueryMonthlySlaListResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
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

