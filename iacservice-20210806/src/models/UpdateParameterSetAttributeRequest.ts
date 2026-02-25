// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterSetAttributeRequestParameters extends $dara.Model {
  /**
   * @example
   * t
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
   * vpc-bp1mjm9exduos1bipw9x6
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

export class UpdateParameterSetAttributeRequest extends $dara.Model {
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

