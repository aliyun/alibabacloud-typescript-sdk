// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubmitRecordsRequestListQuerySearchFilter extends $dara.Model {
  /**
   * @remarks
   * The list of change types (0: Create, 1: Update, 2: Delete).
   */
  changeTypeList?: number[];
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project IDs.
   * 
   * This parameter is required.
   */
  projectIdList?: number[];
  /**
   * @remarks
   * The submission end time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  submitEndTime?: string;
  /**
   * @remarks
   * The submission start time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  submitStartTime?: string;
  /**
   * @remarks
   * The submitters.
   */
  submitterList?: string[];
  static names(): { [key: string]: string } {
    return {
      changeTypeList: 'ChangeTypeList',
      page: 'Page',
      pageSize: 'PageSize',
      projectIdList: 'ProjectIdList',
      submitEndTime: 'SubmitEndTime',
      submitStartTime: 'SubmitStartTime',
      submitterList: 'SubmitterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTypeList: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      pageSize: 'number',
      projectIdList: { 'type': 'array', 'itemType': 'number' },
      submitEndTime: 'string',
      submitStartTime: 'string',
      submitterList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.changeTypeList)) {
      $dara.Model.validateArray(this.changeTypeList);
    }
    if(Array.isArray(this.projectIdList)) {
      $dara.Model.validateArray(this.projectIdList);
    }
    if(Array.isArray(this.submitterList)) {
      $dara.Model.validateArray(this.submitterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The filter for pending release records.
   * 
   * This parameter is required.
   */
  searchFilter?: ListSubmitRecordsRequestListQuerySearchFilter;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      searchFilter: 'SearchFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      searchFilter: ListSubmitRecordsRequestListQuerySearchFilter,
    };
  }

  validate() {
    if(this.searchFilter && typeof (this.searchFilter as any).validate === 'function') {
      (this.searchFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The query command.
   * 
   * This parameter is required.
   */
  listQuery?: ListSubmitRecordsRequestListQuery;
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
      listQuery: ListSubmitRecordsRequestListQuery,
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

