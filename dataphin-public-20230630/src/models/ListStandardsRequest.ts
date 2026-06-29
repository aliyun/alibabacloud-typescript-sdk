// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Directory of the standard.
   * 
   * @example
   * /dir1/dir2
   */
  directory?: string;
  /**
   * @remarks
   * Search keyword: fuzzy search by standard name, English name, or code. Case-insensitive, sorted by relevance.
   * 
   * @example
   * Test
   */
  keyword?: string;
  /**
   * @remarks
   * Page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Standard set ID list.
   */
  standardSetIdList?: number[];
  /**
   * @remarks
   * Stage of the standard: DEV or PROD.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  standardStage?: string;
  /**
   * @remarks
   * Standard status list. Standard statuses under DEV stage: DRAFT, UNDER_REVISION, UNDER_REVIEW, REVIEW_PASSED, IN_PUBLISH. Standard statuses under PROD stage: NOT_ACTIVATED, ACTIVE, EXPIRED.
   */
  standardStatusList?: string[];
  /**
   * @remarks
   * Standard template ID list.
   */
  standardTemplateIdList?: number[];
  /**
   * @remarks
   * Standard type: Basic, EMPTY indicates the standard type is empty.
   */
  standardTypeList?: string[];
  /**
   * @remarks
   * User ID: only queries standards visible to this user ID. If empty, queries standards visible to the current user.
   * 
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
   * Search conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListStandardsRequestListQuery;
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

