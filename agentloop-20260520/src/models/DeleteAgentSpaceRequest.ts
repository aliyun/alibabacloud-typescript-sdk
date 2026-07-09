// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the associated Hybrid Cloud Monitoring workspace.
   * 
   * @example
   * false
   */
  deleteCmsWorkspace?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated MSE namespace.
   * 
   * @example
   * false
   */
  deleteMseNamespace?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated SLS project.
   * 
   * @example
   * false
   */
  deleteSlsProject?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteCmsWorkspace: 'deleteCmsWorkspace',
      deleteMseNamespace: 'deleteMseNamespace',
      deleteSlsProject: 'deleteSlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCmsWorkspace: 'boolean',
      deleteMseNamespace: 'boolean',
      deleteSlsProject: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

