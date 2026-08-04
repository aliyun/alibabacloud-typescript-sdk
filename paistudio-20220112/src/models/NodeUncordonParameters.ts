// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeUncordonParameters extends $dara.Model {
  /**
   * @remarks
   * Quota ID. You can use this ID when you start a workspace or disable scheduling nodes.
   * 
   * @example
   * quota1ci8g793pgm
   */
  quotaId?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the node to uncordon.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
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

