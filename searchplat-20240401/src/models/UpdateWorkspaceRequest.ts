// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test2024106271022
   */
  description?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzivjfrlpyn3y
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

