// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubmitRecordsRequestListQuerySearchFilter extends $dara.Model {
  changeTypeList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  projectIdList?: number[];
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  submitEndTime?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  submitStartTime?: string;
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
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  listQuery?: ListSubmitRecordsRequestListQuery;
  /**
   * @remarks
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

