// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchTemplatesResponseBodyPageResultTemplateList extends $dara.Model {
  /**
   * @remarks
   * The template submission comment.
   * 
   * @example
   * 初始化提交
   */
  comment?: string;
  /**
   * @remarks
   * The template content.
   * 
   * @example
   * #!/bin/bash
   * echo \\"hello world\\"
   */
  content?: string;
  /**
   * @remarks
   * The current latest version.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * 用于数据处理的Shell模板
   */
  description?: string;
  /**
   * @remarks
   * The compute engine version. Currently supported Python versions: Python 2.7 and Python 3.7.
   * 
   * @example
   * Python 3.7
   */
  engine?: string;
  /**
   * @remarks
   * The template creation time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-01-01 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The template update time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-05-28 15:30:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The template ID, which is the same as the menu tree node ID.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The last modifier of the template.
   * 
   * @example
   * 李四
   */
  modifier?: string;
  /**
   * @remarks
   * The ID of the last modifier of the template.
   * 
   * @example
   * 100002
   */
  modifierId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 数据处理模板
   */
  name?: string;
  /**
   * @remarks
   * The node type. Valid values: 10 (Shell) and 21 (Python).
   * 
   * @example
   * 10
   */
  operatorType?: number;
  /**
   * @remarks
   * The template owner.
   * 
   * @example
   * 张三
   */
  owner?: string;
  /**
   * @remarks
   * The template owner ID.
   * 
   * @example
   * 100001
   */
  ownerId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The template status. Valid values: 0 (draft), 2 (submitted), and 100 (in development).
   * 
   * @example
   * 2
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      content: 'Content',
      currentVersion: 'CurrentVersion',
      description: 'Description',
      engine: 'Engine',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      modifier: 'Modifier',
      modifierId: 'ModifierId',
      name: 'Name',
      operatorType: 'OperatorType',
      owner: 'Owner',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      content: 'string',
      currentVersion: 'number',
      description: 'string',
      engine: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modifier: 'string',
      modifierId: 'string',
      name: 'string',
      operatorType: 'number',
      owner: 'string',
      ownerId: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTemplatesResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of template records.
   */
  templateList?: ListBatchTemplatesResponseBodyPageResultTemplateList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      templateList: 'TemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateList: { 'type': 'array', 'itemType': ListBatchTemplatesResponseBodyPageResultTemplateList },
      totalCount: 'number',
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

export class ListBatchTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListBatchTemplatesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListBatchTemplatesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

