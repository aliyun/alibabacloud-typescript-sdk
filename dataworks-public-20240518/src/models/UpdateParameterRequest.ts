// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterRequestProperties extends $dara.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
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

