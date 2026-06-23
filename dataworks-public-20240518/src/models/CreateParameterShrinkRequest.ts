// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * This is a test parameter.
   */
  description?: string;
  /**
   * @remarks
   * The parameter name. It must be unique within the workspace, be prefixed with `workspace.`, and not exceed 255 characters. The part of the name after the prefix must start with a letter and can contain only letters, digits, and underscores (_).
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
   * The workspace ID. This parameter is required when `Scope` is set to `Project`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The value configurations for the parameter. A configuration for the production environment is required. If you provide duplicate configurations for an environment, only the first one is used.
   * 
   * This parameter is required.
   */
  propertiesShrink?: string;
  /**
   * @remarks
   * The scope of the parameter. The default value is `Project`. No other values are currently supported.
   * 
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * - `PlainConstant`: plaintext constant.
   * 
   * - `SecretConstant`: secret constant.
   * 
   * - `Variable`: variable.
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

