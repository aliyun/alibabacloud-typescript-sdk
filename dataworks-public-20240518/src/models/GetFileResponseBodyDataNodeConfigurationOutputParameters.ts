// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataNodeConfigurationOutputParameters extends $dara.Model {
  /**
   * @example
   * It\\"s a context output parameter.
   */
  description?: string;
  /**
   * @example
   * output
   */
  parameterName?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  /**
   * @example
   * ${bizdate}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      parameterName: 'ParameterName',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parameterName: 'string',
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

