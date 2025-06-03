// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataNodeConfigurationInputParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the input parameter of the node. In the code, you can use the ${...} method to reference the input parameter of the node.
   * 
   * This parameter corresponds to the Parameter Name parameter in the Input Parameters table in the Input and Output Parameters section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * input
   */
  parameterName?: string;
  /**
   * @remarks
   * The value source of the input parameter of the node.
   * 
   * This parameter corresponds to the Value Source parameter in the Input Parameters table in the Input and Output Parameters section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
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

