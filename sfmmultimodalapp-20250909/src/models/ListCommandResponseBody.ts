// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommandResponseBodyToolInfoListToolExamples extends $dara.Model {
  parameters?: { [key: string]: any };
  /**
   * @example
   * xxx
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandResponseBodyToolInfoListToolParams extends $dara.Model {
  /**
   * @example
   * xxx
   */
  paramDesc?: string;
  /**
   * @example
   * xx
   */
  paramExample?: string;
  /**
   * @example
   * xxxx
   */
  paramName?: string;
  paramType?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramDesc: 'ParamDesc',
      paramExample: 'ParamExample',
      paramName: 'ParamName',
      paramType: 'ParamType',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramDesc: 'string',
      paramExample: 'string',
      paramName: 'string',
      paramType: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandResponseBodyToolInfoList extends $dara.Model {
  /**
   * @example
   * mm-xxx
   */
  appId?: string;
  /**
   * @example
   * 676776778678
   */
  createUserId?: string;
  /**
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * 44574578797
   */
  domainCode?: string;
  /**
   * @example
   * xxh_xx
   */
  domainName?: string;
  /**
   * @example
   * xxx
   */
  gmtCreate?: string;
  /**
   * @example
   * xxxx
   */
  gmtModified?: string;
  /**
   * @example
   * 2334346345
   */
  modifyUserId?: string;
  /**
   * @example
   * xxx
   */
  modifyUserName?: string;
  replyMode?: string;
  toolExamples?: ListCommandResponseBodyToolInfoListToolExamples[];
  /**
   * @example
   * 6734396796
   */
  toolId?: string;
  /**
   * @example
   * sxxxx
   */
  toolName?: string;
  toolParams?: ListCommandResponseBodyToolInfoListToolParams[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      description: 'Description',
      domainCode: 'DomainCode',
      domainName: 'DomainName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      replyMode: 'ReplyMode',
      toolExamples: 'ToolExamples',
      toolId: 'ToolId',
      toolName: 'ToolName',
      toolParams: 'ToolParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createUserId: 'string',
      createUserName: 'string',
      description: 'string',
      domainCode: 'string',
      domainName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      replyMode: 'string',
      toolExamples: { 'type': 'array', 'itemType': ListCommandResponseBodyToolInfoListToolExamples },
      toolId: 'string',
      toolName: 'string',
      toolParams: { 'type': 'array', 'itemType': ListCommandResponseBodyToolInfoListToolParams },
    };
  }

  validate() {
    if(Array.isArray(this.toolExamples)) {
      $dara.Model.validateArray(this.toolExamples);
    }
    if(Array.isArray(this.toolParams)) {
      $dara.Model.validateArray(this.toolParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  toolInfoList?: ListCommandResponseBodyToolInfoList[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      toolInfoList: 'ToolInfoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      toolInfoList: { 'type': 'array', 'itemType': ListCommandResponseBodyToolInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.toolInfoList)) {
      $dara.Model.validateArray(this.toolInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

