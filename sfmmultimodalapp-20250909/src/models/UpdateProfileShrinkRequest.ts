// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_bfaf7e110b6d4359977d1686a3f8
   */
  appId?: string;
  attributesOperationsShrink?: string;
  description?: string;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 10b6d435
   */
  userDefinedId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-jb5sabg80b4ts71g
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

