// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateResponseBodyTemplateList extends $dara.Model {
  /**
   * @example
   * URL
   */
  coverUrl?: string;
  /**
   * @example
   * 1596506100000
   */
  createTime?: number;
  /**
   * @example
   * WORKBOOK
   */
  docType?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * user_template
   */
  templateType?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * 1596506100000
   */
  updateTime?: number;
  /**
   * @example
   * workspaceId
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      docType: 'DocType',
      id: 'Id',
      templateType: 'TemplateType',
      title: 'Title',
      updateTime: 'UpdateTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'number',
      docType: 'string',
      id: 'string',
      templateType: 'string',
      title: 'string',
      updateTime: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * []
   */
  templateList?: ListTemplateResponseBodyTemplateList[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      requestId: 'requestId',
      templateList: 'templateList',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      templateList: { 'type': 'array', 'itemType': ListTemplateResponseBodyTemplateList },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

