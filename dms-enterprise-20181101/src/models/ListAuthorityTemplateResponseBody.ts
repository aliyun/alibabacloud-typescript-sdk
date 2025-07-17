// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView extends $dara.Model {
  /**
   * @example
   * 2023-10-26 11:37:47
   */
  createTime?: string;
  /**
   * @example
   * 522****
   */
  creatorId?: number;
  description?: string;
  name?: string;
  /**
   * @example
   * 2592
   */
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
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 31853A2B-DC9D-5B39-8492-D2AC8BCF550E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3***
   */
  tid?: number;
  /**
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

