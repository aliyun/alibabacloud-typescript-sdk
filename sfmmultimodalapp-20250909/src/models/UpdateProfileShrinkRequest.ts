// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  attributesOperationsShrink?: string;
  description?: string;
  name?: string;
  userDefinedId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attributesOperationsShrink: 'AttributesOperations',
      description: 'Description',
      name: 'Name',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributesOperationsShrink: 'string',
      description: 'string',
      name: 'string',
      userDefinedId: 'string',
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

