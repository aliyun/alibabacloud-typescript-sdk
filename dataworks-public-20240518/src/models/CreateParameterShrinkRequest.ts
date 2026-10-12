// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a test parameter
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter. It must be unique within the workspace. It must start with "workspace.". The subsequent content must start with a letter and can contain only letters, underscores, and digits. The total length of the name cannot exceed 255 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * workspace.para
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The workspace ID. This parameter is required when Scope is set to Project.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The parameter value configurations. This parameter is required for the production environment. If duplicate environment configurations exist in the array, the subsequent configurations do not take effect.
   * 
   * This parameter is required.
   */
  propertiesShrink?: string;
  /**
   * @remarks
   * The scope of the parameter. Default value: Project. Other types are currently not supported.
   * 
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - PlainConstant: plaintext constant.
   * - SecretConstant: ciphertext constant.
   * - Variable: variable.
   * 
   * This parameter is required.
   * 
   * @example
   * PlainConstant
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      propertiesShrink: 'Properties',
      scope: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      propertiesShrink: 'string',
      scope: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

