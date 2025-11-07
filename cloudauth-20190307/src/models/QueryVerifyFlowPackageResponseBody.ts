// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyFlowPackageResponseBodyItemsFlowDetails extends $dara.Model {
  /**
   * @remarks
   * Total amount.
   * 
   * @example
   * 0
   */
  capacity?: number;
  /**
   * @remarks
   * Name of the flow package.
   * 
   * @example
   * 实人认证流量包
   */
  commodityName?: string;
  /**
   * @remarks
   * Remaining amount.
   * 
   * @example
   * 0.0
   */
  currCapacity?: number;
  /**
   * @remarks
   * Proportion of remaining amount.
   * 
   * @example
   * 100%
   */
  currProportion?: string;
  /**
   * @remarks
   * Expiration date.
   * 
   * @example
   * -
   */
  expireDate?: string;
  /**
   * @remarks
   * Instance name
   * 
   * @example
   * tf-testacccn-hangzhouapigate84369
   */
  instanceName?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * -
   */
  status?: string;
  /**
   * @remarks
   * Effective date.
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
   * Name of the resource package.
   * 
   * @example
   * 实人认证流量包
   */
  commodityName?: string;
  /**
   * @remarks
   * Current available capacity.
   * 
   * @example
   * 0.0
   */
  currCapacity?: number;
  /**
   * @remarks
   * Proportion of current remaining capacity to total capacity.
   * 
   * @example
   * 0%
   */
  currProportion?: string;
  /**
   * @remarks
   * Details of the flow package.
   */
  flowDetails?: QueryVerifyFlowPackageResponseBodyItemsFlowDetails[];
  /**
   * @remarks
   * Total quota.
   * 
   * @example
   * 0.0
   */
  totalCapacity?: number;
  /**
   * @remarks
   * Used capacity.
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
   * Return code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * List of returned data.
   */
  items?: QueryVerifyFlowPackageResponseBodyItems[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 969434DF-926B-4997-9881-4DE94E39F805
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the response was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
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

