// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Custom Agent ID
   * 
   * This parameter is required.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * Operation type
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  operateType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      operateType: 'OperateType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      operateType: 'string',
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

