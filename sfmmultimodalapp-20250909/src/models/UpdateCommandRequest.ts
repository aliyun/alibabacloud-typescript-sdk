// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCommandRequestToolExamples extends $dara.Model {
  parameters?: { [key: string]: string };
  /**
   * @example
   * 给我xxx
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

export class UpdateCommandRequestToolParams extends $dara.Model {
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

export class UpdateCommandRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_axaxaaa
   */
  appId?: string;
  /**
   * @example
   * 659864545
   */
  domainCode?: string;
  /**
   * @example
   * shopping_t
   */
  domainName?: string;
  replyMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  toolDescription?: string;
  toolExamples?: UpdateCommandRequestToolExamples[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8293382932xxx
   */
  toolId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open_bx
   */
  toolName?: string;
  toolParams?: UpdateCommandRequestToolParams[];
  /**
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domainCode: 'DomainCode',
      domainName: 'DomainName',
      replyMode: 'ReplyMode',
      toolDescription: 'ToolDescription',
      toolExamples: 'ToolExamples',
      toolId: 'ToolId',
      toolName: 'ToolName',
      toolParams: 'ToolParams',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domainCode: 'string',
      domainName: 'string',
      replyMode: 'string',
      toolDescription: 'string',
      toolExamples: { 'type': 'array', 'itemType': UpdateCommandRequestToolExamples },
      toolId: 'string',
      toolName: 'string',
      toolParams: { 'type': 'array', 'itemType': UpdateCommandRequestToolParams },
      workspaceId: 'string',
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

