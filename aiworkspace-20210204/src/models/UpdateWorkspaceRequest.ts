// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * *   The name must be 3 to 23 characters in length, and can contain letters, underscores (_), and digits.
   * *   The name must start with a letter.
   * *   The name must be unique in the current region.
   * 
   * @example
   * workspace-example
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

