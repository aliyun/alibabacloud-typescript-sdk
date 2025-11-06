// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeTemplatesResponseBodyResultContentDataContentList extends $dara.Model {
  /**
   * @example
   * 570DA89281533-default
   */
  appCode?: string;
  /**
   * @example
   * 2025-10-24 11:24:34
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-10-24 11:24:34
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * template desc
   */
  templateDesc?: string;
  /**
   * @example
   * template_test
   */
  templateId?: string;
  /**
   * @example
   * template_test
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      status: 'Status',
      templateDesc: 'TemplateDesc',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      status: 'number',
      templateDesc: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeTemplatesResponseBodyResultContentDataContent extends $dara.Model {
  /**
   * @example
   * true
   */
  firstPage?: boolean;
  /**
   * @example
   * 0
   */
  firstResult?: number;
  /**
   * @example
   * true
   */
  lastPage?: boolean;
  list?: ListMdsCubeTemplatesResponseBodyResultContentDataContentList[];
  /**
   * @example
   * 1
   */
  nextPage?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  prePage?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      firstPage: 'FirstPage',
      firstResult: 'FirstResult',
      lastPage: 'LastPage',
      list: 'List',
      nextPage: 'NextPage',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstPage: 'boolean',
      firstResult: 'number',
      lastPage: 'boolean',
      list: { 'type': 'array', 'itemType': ListMdsCubeTemplatesResponseBodyResultContentDataContentList },
      nextPage: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prePage: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeTemplatesResponseBodyResultContentData extends $dara.Model {
  content?: ListMdsCubeTemplatesResponseBodyResultContentDataContent;
  /**
   * @example
   * NONE
   */
  errorCode?: string;
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListMdsCubeTemplatesResponseBodyResultContentDataContent,
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeTemplatesResponseBodyResultContent extends $dara.Model {
  data?: ListMdsCubeTemplatesResponseBodyResultContentData;
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMdsCubeTemplatesResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: string;
  resultContent?: ListMdsCubeTemplatesResponseBodyResultContent;
  /**
   * @example
   * success
   */
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: ListMdsCubeTemplatesResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

