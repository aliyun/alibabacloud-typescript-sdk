// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishRecordsRequestListQuerySearchFilter extends $dara.Model {
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
  publishEndTime?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  publishStartTime?: string;
  publishStatusList?: number[];
  submitterList?: string[];
  static names(): { [key: string]: string } {
    return {
      changeTypeList: 'ChangeTypeList',
      page: 'Page',
      pageSize: 'PageSize',
      projectIdList: 'ProjectIdList',
      publishEndTime: 'PublishEndTime',
      publishStartTime: 'PublishStartTime',
      publishStatusList: 'PublishStatusList',
      submitterList: 'SubmitterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTypeList: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      pageSize: 'number',
      projectIdList: { 'type': 'array', 'itemType': 'number' },
      publishEndTime: 'string',
      publishStartTime: 'string',
      publishStatusList: { 'type': 'array', 'itemType': 'number' },
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
    if(Array.isArray(this.publishStatusList)) {
      $dara.Model.validateArray(this.publishStatusList);
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

export class ListPublishRecordsRequestListQuery extends $dara.Model {
  /**
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchFilter?: ListPublishRecordsRequestListQuerySearchFilter;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      searchFilter: 'SearchFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      searchFilter: ListPublishRecordsRequestListQuerySearchFilter,
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

export class ListPublishRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListPublishRecordsRequestListQuery;
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
      listQuery: ListPublishRecordsRequestListQuery,
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

