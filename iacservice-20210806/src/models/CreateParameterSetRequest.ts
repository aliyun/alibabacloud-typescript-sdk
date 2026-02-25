// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterSetRequestParameters extends $dara.Model {
  /**
   * @example
   * test1121
   */
  name?: string;
  status?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
      type: 'string',
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

export class CreateParameterSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  parameters?: CreateParameterSetRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': CreateParameterSetRequestParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

