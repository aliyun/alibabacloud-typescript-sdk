// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgWhiteListQueryListResponseBodyPageDataData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the data masking whitelist cannot be earlier than the time when the data masking whitelist takes effect. Unit: days.
   * 
   * @example
   * 2024-05-10 15:46:20
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the whitelist was created.
   * 
   * @example
   * 2024-05-09 15:46:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the whitelist was modified.
   * 
   * @example
   * 2024-05-09 15:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the data masking whitelist.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The ID of the data masking rule.
   * 
   * @example
   * 123
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the level-2 data masking scenario.
   * 
   * @example
   * 123
   */
  sceneId?: number;
  /**
   * @remarks
   * The time when the data masking whitelist takes effect cannot be earlier than the current time. Unit: days.
   * 
   * @example
   * 2024-05-09 15:46:20
   */
  startTime?: string;
  /**
   * @remarks
   * The sensitive field type.
   * 
   * @example
   * phone
   */
  type?: string;
  /**
   * @remarks
   * A collection of user group names.
   */
  userGroups?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ruleId: 'RuleId',
      sceneId: 'SceneId',
      startTime: 'StartTime',
      type: 'Type',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ruleId: 'number',
      sceneId: 'number',
      startTime: 'string',
      type: 'string',
      userGroups: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgWhiteListQueryListResponseBodyPageData extends $dara.Model {
  /**
   * @remarks
   * A collection of whitelists.
   */
  data?: DsgWhiteListQueryListResponseBodyPageDataData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of data masking whitelists.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DsgWhiteListQueryListResponseBodyPageDataData },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgWhiteListQueryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1029030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The pagination information.
   */
  pageData?: DsgWhiteListQueryListResponseBodyPageData;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      pageData: 'PageData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      pageData: DsgWhiteListQueryListResponseBodyPageData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageData && typeof (this.pageData as any).validate === 'function') {
      (this.pageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

