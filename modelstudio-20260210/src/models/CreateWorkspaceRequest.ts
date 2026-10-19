// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The service deployment scope (the deployment scope for services that depend on GPU resources, such as inference, training, and deployment). The Beijing and Singapore regions are not supported.
   * 
   * @example
   * global
   */
  serviceSite?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * This parameter is required.
   * 
   * @example
   * workspace_test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceSite: 'serviceSite',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceSite: 'string',
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

