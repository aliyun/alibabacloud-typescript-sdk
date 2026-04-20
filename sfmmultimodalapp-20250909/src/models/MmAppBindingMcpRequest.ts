// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MmAppBindingMcpRequestMcps extends $dara.Model {
  /**
   * @example
   * mcp-ZDI1MDU2ZTExZGZh
   */
  code?: string;
  toolList?: string[];
  /**
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      toolList: 'ToolList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      toolList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.toolList)) {
      $dara.Model.validateArray(this.toolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MmAppBindingMcpRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_a2eb4e04b48041108edb1f6de815
   */
  appId?: string;
  mcps?: MmAppBindingMcpRequestMcps[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-o8ixktz41iyd2b6p
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mcps: 'Mcps',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mcps: { 'type': 'array', 'itemType': MmAppBindingMcpRequestMcps },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mcps)) {
      $dara.Model.validateArray(this.mcps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

