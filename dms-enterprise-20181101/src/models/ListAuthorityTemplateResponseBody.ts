// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView extends $dara.Model {
  createTime?: string;
  creatorId?: number;
  description?: string;
  name?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      description: 'Description',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creatorId: 'number',
      description: 'string',
      name: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityTemplateResponseBodyAuthorityTemplateViewList extends $dara.Model {
  authorityTemplateView?: ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView[];
  static names(): { [key: string]: string } {
    return {
      authorityTemplateView: 'AuthorityTemplateView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateView: { 'type': 'array', 'itemType': ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView },
    };
  }

  validate() {
    if(Array.isArray(this.authorityTemplateView)) {
      $dara.Model.validateArray(this.authorityTemplateView);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityTemplateResponseBody extends $dara.Model {
  authorityTemplateViewList?: ListAuthorityTemplateResponseBodyAuthorityTemplateViewList;
  /**
   * @remarks
   * The error code that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 31853A2B-DC9D-5B39-8492-D2AC8BCF550E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The total number of permission templates.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorityTemplateViewList: 'AuthorityTemplateViewList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateViewList: ListAuthorityTemplateResponseBodyAuthorityTemplateViewList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.authorityTemplateViewList && typeof (this.authorityTemplateViewList as any).validate === 'function') {
      (this.authorityTemplateViewList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

