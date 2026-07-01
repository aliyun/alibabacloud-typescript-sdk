// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTemplateVersionsResponseBodyDataTemplateVersionList extends $dara.Model {
  /**
   * @example
   * 初始化提交
   */
  comment?: string;
  /**
   * @example
   * #!/bin/bash
   * echo \\"hello world\\"
   */
  content?: string;
  /**
   * @example
   * 用于数据处理的Shell模板
   */
  description?: string;
  /**
   * @example
   * Python 3.7
   */
  engine?: string;
  /**
   * @example
   * 2026-01-01 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-05-28 15:30:00
   */
  gmtModified?: string;
  /**
   * @example
   * 1001
   */
  id?: number;
  /**
   * @example
   * 李四
   */
  modifier?: string;
  /**
   * @example
   * 100002
   */
  modifierId?: string;
  /**
   * @example
   * 数据处理模板
   */
  name?: string;
  /**
   * @example
   * 10
   */
  operatorType?: number;
  /**
   * @example
   * 张三
   */
  owner?: string;
  /**
   * @example
   * 100001
   */
  ownerId?: string;
  /**
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @example
   * 2
   */
  status?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      content: 'Content',
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
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      content: 'string',
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
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTemplateVersionsResponseBodyData extends $dara.Model {
  templateVersionList?: GetBatchTemplateVersionsResponseBodyDataTemplateVersionList[];
  static names(): { [key: string]: string } {
    return {
      templateVersionList: 'TemplateVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateVersionList: { 'type': 'array', 'itemType': GetBatchTemplateVersionsResponseBodyDataTemplateVersionList },
    };
  }

  validate() {
    if(Array.isArray(this.templateVersionList)) {
      $dara.Model.validateArray(this.templateVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTemplateVersionsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetBatchTemplateVersionsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBatchTemplateVersionsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

