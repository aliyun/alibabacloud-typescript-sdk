// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MmAppBindingMcpShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_a2eb4e04b48041108edb1f6de815
   */
  appId?: string;
  mcpsShrink?: string;
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
      mcpsShrink: 'Mcps',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mcpsShrink: 'string',
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

