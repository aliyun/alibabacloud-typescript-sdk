// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCommandShrinkRequest extends $dara.Model {
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
  toolExamplesShrink?: string;
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
  toolParamsShrink?: string;
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
      toolExamplesShrink: 'ToolExamples',
      toolId: 'ToolId',
      toolName: 'ToolName',
      toolParamsShrink: 'ToolParams',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domainCode: 'string',
      domainName: 'string',
      toolDescription: 'string',
      toolExamplesShrink: 'string',
      toolId: 'string',
      toolName: 'string',
      toolParamsShrink: 'string',
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

