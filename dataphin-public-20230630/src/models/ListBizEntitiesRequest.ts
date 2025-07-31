// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizEntitiesRequestListQueryFilterCriteria extends $dara.Model {
  bizUnitIdList?: number[];
  bizUnitNameList?: string[];
  dataDomainIdList?: number[];
  dataDomainNameList?: string[];
  hasTableRef?: boolean;
  ownerUserIdList?: string[];
  statusList?: string[];
  subTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizUnitIdList: 'BizUnitIdList',
      bizUnitNameList: 'BizUnitNameList',
      dataDomainIdList: 'DataDomainIdList',
      dataDomainNameList: 'DataDomainNameList',
      hasTableRef: 'HasTableRef',
      ownerUserIdList: 'OwnerUserIdList',
      statusList: 'StatusList',
      subTypeList: 'SubTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitIdList: { 'type': 'array', 'itemType': 'number' },
      bizUnitNameList: { 'type': 'array', 'itemType': 'string' },
      dataDomainIdList: { 'type': 'array', 'itemType': 'number' },
      dataDomainNameList: { 'type': 'array', 'itemType': 'string' },
      hasTableRef: 'boolean',
      ownerUserIdList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      subTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bizUnitIdList)) {
      $dara.Model.validateArray(this.bizUnitIdList);
    }
    if(Array.isArray(this.bizUnitNameList)) {
      $dara.Model.validateArray(this.bizUnitNameList);
    }
    if(Array.isArray(this.dataDomainIdList)) {
      $dara.Model.validateArray(this.dataDomainIdList);
    }
    if(Array.isArray(this.dataDomainNameList)) {
      $dara.Model.validateArray(this.dataDomainNameList);
    }
    if(Array.isArray(this.ownerUserIdList)) {
      $dara.Model.validateArray(this.ownerUserIdList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.subTypeList)) {
      $dara.Model.validateArray(this.subTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesRequestListQuery extends $dara.Model {
  filterCriteria?: ListBizEntitiesRequestListQueryFilterCriteria;
  /**
   * @example
   * object_
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filterCriteria: 'FilterCriteria',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterCriteria: ListBizEntitiesRequestListQueryFilterCriteria,
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filterCriteria && typeof (this.filterCriteria as any).validate === 'function') {
      (this.filterCriteria as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListBizEntitiesRequestListQuery;
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
      listQuery: ListBizEntitiesRequestListQuery,
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

