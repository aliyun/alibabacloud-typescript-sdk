// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterSetRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * region
   */
  name?: string;
  secret?: boolean;
  /**
   * @remarks
   * The parameter set status. Valid values:
   * 
   * - HAS_VALUE (default): Defines a specific value.
   * - EXPLICIT_NULL: Explicitly sets the value to null.
   * 
   * @example
   * HAS_VALUE
   */
  status?: string;
  /**
   * @remarks
   * The parameter type. Valid values: string, number, bool, map(string), and list(string).
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The parameter value. Use JSON for complex types.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      secret: 'secret',
      status: 'status',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      secret: 'boolean',
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
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the parameter set. Maximum length: 1024 characters.
   * 
   * @example
   * This is parameterSet
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter set. Maximum length: 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The list of parameters.
   */
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

