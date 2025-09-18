// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCommandRequestToolExamples extends $dara.Model {
  /**
   * @example
   * 给我xxx
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  validate() {
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
  static names(): { [key: string]: string } {
    return {
      paramDesc: 'ParamDesc',
      paramExample: 'ParamExample',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramDesc: 'string',
      paramExample: 'string',
      paramName: 'string',
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

