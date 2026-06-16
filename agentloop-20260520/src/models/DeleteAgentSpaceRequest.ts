// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentSpaceRequest extends $dara.Model {
  deleteCmsWorkspace?: boolean;
  deleteMseNamespace?: boolean;
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

