// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WorkspaceSpec } from "./WorkspaceSpec";


export class WorkspaceSpecs extends $dara.Model {
  /**
   * @remarks
   * Applicable product (DLC, DSW, EAS, ...)
   * 
   * @example
   * DLC
   */
  product?: string;
  /**
   * @remarks
   * List of resource specifications
   */
  specs?: WorkspaceSpec[];
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 122421
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      specs: 'Specs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      specs: { 'type': 'array', 'itemType': WorkspaceSpec },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

