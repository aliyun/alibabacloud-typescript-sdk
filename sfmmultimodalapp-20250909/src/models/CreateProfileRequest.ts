// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProfileRequestAttributes extends $dara.Model {
  defaultValue?: string;
  description?: string;
  /**
   * @example
   * False
   */
  immutable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      immutable: 'Immutable',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      immutable: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProfileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_bfaf7e110b6d4359977d1686a3f8
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: CreateProfileRequestAttributes[];
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * 6e18191727f747ec9de06a2
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
      attributes: 'Attributes',
      description: 'Description',
      name: 'Name',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attributes: { 'type': 'array', 'itemType': CreateProfileRequestAttributes },
      description: 'string',
      name: 'string',
      userDefinedId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

