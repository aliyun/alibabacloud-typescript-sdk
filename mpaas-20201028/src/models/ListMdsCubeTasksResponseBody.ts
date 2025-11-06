// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeTasksResponseBodyResultContentDataContent extends $dara.Model {
  /**
   * @example
   * 570DA89281533-default
   */
  appCode?: string;
  /**
   * @example
   * 2025-10-24 15:17:15
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-10-24 15:17:15
   */
  gmtModified?: string;
  /**
   * @example
   * {}
   */
  greyConfigInfo?: string;
  /**
   * @example
   * 2025-10-24 15:17:15
   */
  greyEndtimeData?: string;
  /**
   * @example
   * 1
   */
  greyNum?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * default
   */
  operator?: string;
  /**
   * @example
   * 2
   */
  publishMode?: number;
  /**
   * @example
   * 3
   */
  publishType?: number;
  /**
   * @example
   * 0.0.0.1
   */
  resourceVersion?: string;
  /**
   * @example
   * TEST
   */
  taskDesc?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 1
   */
  templateId?: string;
  /**
   * @example
   * 1
   */
  templateResourceId?: number;
  /**
   * @example
   * TEST
   */
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
   * True
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
  resultContent?: ListMdsCubeTasksResponseBodyResultContent;
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

