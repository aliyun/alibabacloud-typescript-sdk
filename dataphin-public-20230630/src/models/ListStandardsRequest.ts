// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardsRequestListQuery extends $dara.Model {
  /**
   * @example
   * /dir1/dir2
   */
  directory?: string;
  /**
   * @example
   * Test
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
  standardSetIdList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  standardStage?: string;
  standardStatusList?: string[];
  standardTemplateIdList?: number[];
  standardTypeList?: string[];
  /**
   * @example
   * 30012011
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      standardSetIdList: 'StandardSetIdList',
      standardStage: 'StandardStage',
      standardStatusList: 'StandardStatusList',
      standardTemplateIdList: 'StandardTemplateIdList',
      standardTypeList: 'StandardTypeList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: 'string',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      standardSetIdList: { 'type': 'array', 'itemType': 'number' },
      standardStage: 'string',
      standardStatusList: { 'type': 'array', 'itemType': 'string' },
      standardTemplateIdList: { 'type': 'array', 'itemType': 'number' },
      standardTypeList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.standardSetIdList)) {
      $dara.Model.validateArray(this.standardSetIdList);
    }
    if(Array.isArray(this.standardStatusList)) {
      $dara.Model.validateArray(this.standardStatusList);
    }
    if(Array.isArray(this.standardTemplateIdList)) {
      $dara.Model.validateArray(this.standardTemplateIdList);
    }
    if(Array.isArray(this.standardTypeList)) {
      $dara.Model.validateArray(this.standardTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListStandardsRequestListQuery;
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
      listQuery: ListStandardsRequestListQuery,
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

