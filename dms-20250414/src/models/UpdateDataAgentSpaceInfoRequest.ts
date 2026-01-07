// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentSpaceInfoRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * space for test new
   */
  workspaceDesc?: string;
  /**
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @example
   * yunqitest_v2
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      workspaceDesc: 'WorkspaceDesc',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      workspaceDesc: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

