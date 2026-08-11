// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterSetAttributeRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * region
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the parameter is a secret parameter. Secret parameters are hidden in API responses and console displays, and are stored with encryption.
   */
  secret?: boolean;
  /**
   * @remarks
   * The parameter set status. Valid values: 
   * 
   * HAS_VALUE (default): Defines a specific value. 
   * 
   * EXPLICIT_NULL: Explicitly set to null.
   * 
   * @example
   * HAS_VALUE
   */
  status?: string;
  /**
   * @remarks
   * The parameter type (string/number/bool/map(string)/list(string)).
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
   * cn-zhangjiakou
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

export class UpdateParameterSetAttributeRequest extends $dara.Model {
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
   * The parameter list.
   */
  parameters?: UpdateParameterSetAttributeRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateParameterSetAttributeRequestParameters },
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

