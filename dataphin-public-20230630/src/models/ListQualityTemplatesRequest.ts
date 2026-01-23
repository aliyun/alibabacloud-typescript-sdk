// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityTemplatesRequestListQuery extends $dara.Model {
  catalogList?: string[];
  currentUserOwned?: boolean;
  /**
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  supportDataSourceTypeList?: string[];
  templateOwnerList?: string[];
  templateSourceList?: string[];
  templateTypeList?: string[];
  watchTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      catalogList: 'CatalogList',
      currentUserOwned: 'CurrentUserOwned',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      supportDataSourceTypeList: 'SupportDataSourceTypeList',
      templateOwnerList: 'TemplateOwnerList',
      templateSourceList: 'TemplateSourceList',
      templateTypeList: 'TemplateTypeList',
      watchTypeList: 'WatchTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogList: { 'type': 'array', 'itemType': 'string' },
      currentUserOwned: 'boolean',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      supportDataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      templateOwnerList: { 'type': 'array', 'itemType': 'string' },
      templateSourceList: { 'type': 'array', 'itemType': 'string' },
      templateTypeList: { 'type': 'array', 'itemType': 'string' },
      watchTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.catalogList)) {
      $dara.Model.validateArray(this.catalogList);
    }
    if(Array.isArray(this.supportDataSourceTypeList)) {
      $dara.Model.validateArray(this.supportDataSourceTypeList);
    }
    if(Array.isArray(this.templateOwnerList)) {
      $dara.Model.validateArray(this.templateOwnerList);
    }
    if(Array.isArray(this.templateSourceList)) {
      $dara.Model.validateArray(this.templateSourceList);
    }
    if(Array.isArray(this.templateTypeList)) {
      $dara.Model.validateArray(this.templateTypeList);
    }
    if(Array.isArray(this.watchTypeList)) {
      $dara.Model.validateArray(this.watchTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityTemplatesRequest extends $dara.Model {
  listQuery?: ListQualityTemplatesRequestListQuery;
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
      listQuery: ListQualityTemplatesRequestListQuery,
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

