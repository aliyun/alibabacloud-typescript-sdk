// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCommandRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_xxxxx
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7533545
   */
  domainCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 564646456
   */
  toolId?: string;
  /**
   * @example
   * llm-xxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domainCode: 'DomainCode',
      toolId: 'ToolId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domainCode: 'string',
      toolId: 'string',
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

