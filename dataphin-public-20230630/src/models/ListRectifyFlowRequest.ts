// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRectifyFlowRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The governance object type. Valid values: TABLE, DATASOURCE_TABLE, DATASOURCE, INDEX, REALTIME_LOGICAL_TABLE, and QD_FEATURE.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  governItemType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 7381905
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 8322096
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority filters. Valid values: HIGH, MIDDLE, and LOW.
   */
  priorityFilters?: string[];
  /**
   * @remarks
   * The list of rectifier IDs.
   */
  rectifyUserFilters?: string[];
  /**
   * @remarks
   * SUBMIT_RECTIFY, SUBMIT_VERIFY, FINISH_VERIFY, and REJECT_VERIFY.
   */
  statusFilters?: string[];
  /**
   * @remarks
   * The list of verifier IDs.
   */
  verifyUserFilters?: string[];
  static names(): { [key: string]: string } {
    return {
      governItemType: 'GovernItemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priorityFilters: 'PriorityFilters',
      rectifyUserFilters: 'RectifyUserFilters',
      statusFilters: 'StatusFilters',
      verifyUserFilters: 'VerifyUserFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governItemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      priorityFilters: { 'type': 'array', 'itemType': 'string' },
      rectifyUserFilters: { 'type': 'array', 'itemType': 'string' },
      statusFilters: { 'type': 'array', 'itemType': 'string' },
      verifyUserFilters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.priorityFilters)) {
      $dara.Model.validateArray(this.priorityFilters);
    }
    if(Array.isArray(this.rectifyUserFilters)) {
      $dara.Model.validateArray(this.rectifyUserFilters);
    }
    if(Array.isArray(this.statusFilters)) {
      $dara.Model.validateArray(this.statusFilters);
    }
    if(Array.isArray(this.verifyUserFilters)) {
      $dara.Model.validateArray(this.verifyUserFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRectifyFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The business request parameters.
   * 
   * This parameter is required.
   */
  listQuery?: ListRectifyFlowRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListRectifyFlowRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

