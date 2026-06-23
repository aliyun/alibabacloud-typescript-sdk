// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeTemplatesResponseBodyResultContentDataContentList extends $dara.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  status?: number;
  templateDesc?: string;
  templateId?: string;
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
  firstPage?: boolean;
  firstResult?: number;
  lastPage?: boolean;
  list?: ListMdsCubeTemplatesResponseBodyResultContentDataContentList[];
  nextPage?: number;
  pageNo?: number;
  pageSize?: number;
  prePage?: number;
  totalCount?: number;
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
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
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
  requestId?: string;
  resultCode?: string;
  resultContent?: ListMdsCubeTemplatesResponseBodyResultContent;
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

