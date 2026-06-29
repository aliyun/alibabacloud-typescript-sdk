// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubmitRecordsRequestListQuerySearchFilter extends $dara.Model {
  /**
   * @remarks
   * List of change types (0: Create / 1: Update / 2: Delete).
   */
  changeTypeList?: number[];
  /**
   * @remarks
   * Page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Project ID.
   * 
   * This parameter is required.
   */
  projectIdList?: number[];
  /**
   * @remarks
   * Submission end time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  submitEndTime?: string;
  /**
   * @remarks
   * Submission start time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  submitStartTime?: string;
  /**
   * @remarks
   * Submitter.
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
   * Search keyword.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * Pending deployment record filter.
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
   * Query command.
   * 
   * This parameter is required.
   */
  listQuery?: ListSubmitRecordsRequestListQuery;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListSubmitRecordsRequestListQuery,
      opTenantId: 'number',
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

