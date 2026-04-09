// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterShrinkRequest extends $dara.Model {
  /**
   * @example
   * 这是一个测试参数
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workspace.para
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  propertiesShrink?: string;
  /**
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
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

