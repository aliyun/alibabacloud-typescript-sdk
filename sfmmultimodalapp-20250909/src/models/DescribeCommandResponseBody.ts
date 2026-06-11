// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandResponseBodyToolExamples extends $dara.Model {
  parameters?: { [key: string]: string };
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
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribeCommandResponseBodyToolParams extends $dara.Model {
  /**
   * @example
   * xxx
   */
  paramDesc?: string;
  /**
   * @example
   * xxx
   */
  paramExample?: string;
  /**
   * @example
   * xxx
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

export class DescribeCommandResponseBody extends $dara.Model {
  /**
   * @example
   * mm_xxxx
   */
  appId?: string;
  /**
   * @example
   * 232423
   */
  createUserId?: string;
  /**
   * @example
   * sdsd
   */
  createUserName?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @example
   * 56632343
   */
  domainCode?: string;
  /**
   * @example
   * xccvsd
   */
  domainName?: string;
  /**
   * @example
   * xxx
   */
  gmtCreate?: string;
  /**
   * @example
   * xxx
   */
  gmtModified?: string;
  /**
   * @example
   * 57967
   */
  modifyUserId?: string;
  /**
   * @example
   * xxx
   */
  modifyUserName?: string;
  replyMode?: string;
  /**
   * @example
   * xxxx
   */
  requestId?: string;
  toolExamples?: DescribeCommandResponseBodyToolExamples[];
  /**
   * @example
   * 65655
   */
  toolId?: string;
  /**
   * @example
   * dsf34
   */
  toolName?: string;
  toolParams?: DescribeCommandResponseBodyToolParams[];
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
      requestId: 'RequestId',
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
      requestId: 'string',
      toolExamples: { 'type': 'array', 'itemType': DescribeCommandResponseBodyToolExamples },
      toolId: 'string',
      toolName: 'string',
      toolParams: { 'type': 'array', 'itemType': DescribeCommandResponseBodyToolParams },
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

