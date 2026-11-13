// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * This is a test parameter.
   */
  description?: string;
  /**
   * @remarks
   * The parameter ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The owner\\"s account ID.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The parameter value configuration. This parameter is required for the production environment. If you specify the same environment multiple times, only the first configuration is used.
   */
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

