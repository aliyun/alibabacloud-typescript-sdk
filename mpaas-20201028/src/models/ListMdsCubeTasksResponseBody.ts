// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeTasksResponseBodyResultContentDataContent extends $dara.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  id?: number;
  operator?: string;
  publishMode?: number;
  publishType?: number;
  resourceVersion?: string;
  taskDesc?: string;
  taskStatus?: number;
  templateId?: string;
  templateResourceId?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      operator: 'Operator',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      resourceVersion: 'ResourceVersion',
      taskDesc: 'TaskDesc',
      taskStatus: 'TaskStatus',
      templateId: 'TemplateId',
      templateResourceId: 'TemplateResourceId',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      operator: 'string',
      publishMode: 'number',
      publishType: 'number',
      resourceVersion: 'string',
      taskDesc: 'string',
      taskStatus: 'number',
      templateId: 'string',
      templateResourceId: 'number',
      whitelistIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeTasksResponseBodyResultContentData extends $dara.Model {
  content?: ListMdsCubeTasksResponseBodyResultContentDataContent[];
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
      content: { 'type': 'array', 'itemType': ListMdsCubeTasksResponseBodyResultContentDataContent },
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeTasksResponseBodyResultContent extends $dara.Model {
  data?: ListMdsCubeTasksResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMdsCubeTasksResponseBodyResultContentData,
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

export class ListMdsCubeTasksResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: ListMdsCubeTasksResponseBodyResultContent;
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
      resultContent: ListMdsCubeTasksResponseBodyResultContent,
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

