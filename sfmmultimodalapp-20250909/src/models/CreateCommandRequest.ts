// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCommandRequestToolExamples extends $dara.Model {
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

export class CreateCommandRequestToolParams extends $dara.Model {
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

export class CreateCommandRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
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
  toolExamples?: CreateCommandRequestToolExamples[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open_bx
   */
  toolName?: string;
  toolParams?: CreateCommandRequestToolParams[];
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
      toolExamples: { 'type': 'array', 'itemType': CreateCommandRequestToolExamples },
      toolName: 'string',
      toolParams: { 'type': 'array', 'itemType': CreateCommandRequestToolParams },
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

