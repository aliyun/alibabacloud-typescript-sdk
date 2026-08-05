// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionInstanceRequestCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class UpdateFunctionInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The creation parameters.
   */
  createParameters?: UpdateFunctionInstanceRequestCreateParameters[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      createParameters: 'createParameters',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': UpdateFunctionInstanceRequestCreateParameters },
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

