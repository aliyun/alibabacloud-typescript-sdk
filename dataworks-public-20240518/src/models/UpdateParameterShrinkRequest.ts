// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterShrinkRequest extends $dara.Model {
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
   * 12345
   */
  id?: number;
  /**
   * @example
   * 123456789
   */
  owner?: string;
  propertiesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      owner: 'Owner',
      propertiesShrink: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      owner: 'string',
      propertiesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

