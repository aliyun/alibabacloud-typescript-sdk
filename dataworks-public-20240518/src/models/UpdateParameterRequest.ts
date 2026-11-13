// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterRequestProperties extends $dara.Model {
  /**
   * @remarks
   * The project environment.
   * 
   * - `Prod`: the production environment
   * 
   * - `Dev`: the development environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterRequest extends $dara.Model {
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
  properties?: UpdateParameterRequestProperties[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      owner: 'Owner',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      owner: 'string',
      properties: { 'type': 'array', 'itemType': UpdateParameterRequestProperties },
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

