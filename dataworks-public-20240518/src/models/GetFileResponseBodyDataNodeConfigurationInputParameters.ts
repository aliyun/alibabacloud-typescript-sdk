// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataNodeConfigurationInputParameters extends $dara.Model {
  /**
   * @example
   * input
   */
  parameterName?: string;
  /**
   * @example
   * project_001.parent_node:outputs
   */
  valueSource?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      valueSource: 'ValueSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      valueSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

