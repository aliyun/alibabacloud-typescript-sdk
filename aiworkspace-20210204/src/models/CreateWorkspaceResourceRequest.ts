// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkspaceResourceRequestResources } from "./CreateWorkspaceResourceRequestResources";


export class CreateWorkspaceResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * *   CreateAndAttach: creates resources and associates the resources with a workspace.
   * *   Attach: associates resources with a workspace.
   * 
   * >  MaxCompute supports only the Attach operation.
   * 
   * @example
   * CreateAndAttach
   */
  option?: string;
  /**
   * @remarks
   * The resources.
   * 
   * This parameter is required.
   */
  resources?: CreateWorkspaceResourceRequestResources[];
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: 'string',
      resources: { 'type': 'array', 'itemType': CreateWorkspaceResourceRequestResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

