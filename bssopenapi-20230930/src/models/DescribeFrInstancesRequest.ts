// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFrInstancesRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The account list to access. If empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1004064243473974
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The capacity type.
   * 
   * @example
   * deadlineAcc
   */
  capacityType?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * slb_albcubag_dp_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The cycle type.
   * 
   * @example
   * dynamicMonth
   */
  cycleType?: string;
  /**
   * @remarks
   * The enterprise and account list. If empty, the current account is queried.
   */
  ecIdAccountIds?: DescribeFrInstancesRequestEcIdAccountIds[];
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1710604800000
   */
  endTime?: number;
  /**
   * @remarks
   * The resource dimension for the query.
   * 
   * @example
   * cu
   */
  group?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * alb_cubag*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance tag label value of the resource plan instance.
   * 
   * @example
   * FR-***
   */
  instanceTag?: string;
  /**
   * @remarks
   * The primary marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684202000018
   */
  nbid?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * slb
   */
  productCode?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * startTime
   */
  sortField?: string;
  /**
   * @remarks
   * The collation for sorting.
   * 
   * @example
   * asc
   */
  sortRule?: string;
  /**
   * @remarks
   * The specification.
   * 
   * @example
   * *
   */
  spec?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1678939035000
   */
  startTime?: number;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * valid
   */
  status?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * slb_albcubag*******
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      capacityType: 'CapacityType',
      commodityCode: 'CommodityCode',
      cycleType: 'CycleType',
      ecIdAccountIds: 'EcIdAccountIds',
      endTime: 'EndTime',
      group: 'Group',
      instanceId: 'InstanceId',
      instanceTag: 'InstanceTag',
      nbid: 'Nbid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      sortField: 'SortField',
      sortRule: 'SortRule',
      spec: 'Spec',
      startTime: 'StartTime',
      status: 'Status',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityType: 'string',
      commodityCode: 'string',
      cycleType: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeFrInstancesRequestEcIdAccountIds },
      endTime: 'number',
      group: 'string',
      instanceId: 'string',
      instanceTag: 'string',
      nbid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      sortField: 'string',
      sortRule: 'string',
      spec: 'string',
      startTime: 'number',
      status: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

