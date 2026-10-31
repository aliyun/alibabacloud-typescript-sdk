// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The folder to which the standard belongs.
   * 
   * @example
   * /dir1/dir2
   */
  directory?: string;
  /**
   * @remarks
   * The search keyword. Supports case-insensitive fuzzy search by standard name, English name, or code, and sorts results by relevance.
   * 
   * @example
   * Test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the standard sets to which the standards belong.
   */
  standardSetIdList?: number[];
  /**
   * @remarks
   * The stages of the standards. Valid values: DEV and PROD.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  standardStage?: string;
  /**
   * @remarks
   * The list of standard statuses. For the DEV stage, the standard statuses are: DRAFT (Draft), UNDER_REVISION (Under Revision), UNDER_REVIEW (Under Review), REVIEW_PASSED (Approved), and IN_PUBLISH (Publishing). For the PROD stage, the standard statuses are: NOT_ACTIVATED (Not Activated), ACTIVE (Active), and EXPIRED (Expired).
   */
  standardStatusList?: string[];
  /**
   * @remarks
   * The IDs of the standard templates to which the standards belong.
   */
  standardTemplateIdList?: number[];
  /**
   * @remarks
   * The list of standard types. Valid values: Basic, and EMPTY (the standard type is empty).
   */
  standardTypeList?: string[];
  /**
   * @remarks
   * The user ID. If specified, only standards visible to this user are queried. If left empty, standards visible to the current user are queried.
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
   * The search conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListStandardsRequestListQuery;
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
   * The ID of the user who performs the operation.
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
      listQuery: ListStandardsRequestListQuery,
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

