// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyFlowPackageResponseBodyItemsFlowDetails extends $dara.Model {
  /**
   * @remarks
   * The total capacity.
   * 
   * @example
   * 0
   */
  capacity?: number;
  /**
   * @remarks
   * The name of the data transfer plan.
   * 
   * @example
   * 实人认证流量包
   */
  commodityName?: string;
  /**
   * @remarks
   * The remaining capacity.
   * 
   * @example
   * 0.0
   */
  currCapacity?: number;
  /**
   * @remarks
   * The ratio of the remaining capacity to the total capacity.
   * 
   * @example
   * 100%
   */
  currProportion?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * -
   */
  expireDate?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * tf-testacccn-hangzhouapigate84369
   */
  instanceName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * -
   */
  status?: string;
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * -
   */
  takeEffectDate?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      commodityName: 'CommodityName',
      currCapacity: 'CurrCapacity',
      currProportion: 'CurrProportion',
      expireDate: 'ExpireDate',
      instanceName: 'InstanceName',
      status: 'Status',
      takeEffectDate: 'TakeEffectDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      commodityName: 'string',
      currCapacity: 'number',
      currProportion: 'string',
      expireDate: 'string',
      instanceName: 'string',
      status: 'string',
      takeEffectDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVerifyFlowPackageResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the resource plan.
   * 
   * @example
   * 实人认证流量包
   */
  commodityName?: string;
  /**
   * @remarks
   * The current remaining available capacity.
   * 
   * @example
   * 0.0
   */
  currCapacity?: number;
  /**
   * @remarks
   * The ratio of the current remaining capacity to the total capacity.
   * 
   * @example
   * 0%
   */
  currProportion?: string;
  /**
   * @remarks
   * The data transfer plan details.
   */
  flowDetails?: QueryVerifyFlowPackageResponseBodyItemsFlowDetails[];
  /**
   * @remarks
   * The total quota.
   * 
   * @example
   * 0.0
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The used capacity.
   * 
   * @example
   * 0.0
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      commodityName: 'CommodityName',
      currCapacity: 'CurrCapacity',
      currProportion: 'CurrProportion',
      flowDetails: 'FlowDetails',
      totalCapacity: 'TotalCapacity',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityName: 'string',
      currCapacity: 'number',
      currProportion: 'string',
      flowDetails: { 'type': 'array', 'itemType': QueryVerifyFlowPackageResponseBodyItemsFlowDetails },
      totalCapacity: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flowDetails)) {
      $dara.Model.validateArray(this.flowDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVerifyFlowPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of returned data.
   */
  items?: QueryVerifyFlowPackageResponseBodyItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 969434DF-926B-4997-9881-4DE94E39F805
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
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': QueryVerifyFlowPackageResponseBodyItems },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
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

