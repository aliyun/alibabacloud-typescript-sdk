// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataNodeConfigurationOutputParameters extends $dara.Model {
  /**
   * @remarks
   * The description of the output parameter of the node.
   * 
   * @example
   * It\\"s a context output parameter.
   */
  description?: string;
  /**
   * @remarks
   * The name of the output parameter of the node.
   * 
   * This parameter corresponds to the Parameter Name parameter in the Output Parameters table in the Input and Output Parameters section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * output
   */
  parameterName?: string;
  /**
   * @remarks
   * The type of the output parameter of the node. Valid values:
   * 
   * *   1: indicates a constant.
   * *   2: indicates a variable.
   * *   3: indicates a pass-through variable.
   * 
   * This parameter corresponds to the Type parameter in the Output Parameters table in the Input and Output Parameters section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 1
   */
  type?: string;
  /**
   * @remarks
   * The value of the output parameter of the node.
   * 
   * This parameter corresponds to the Value parameter in the Output Parameters table in the Input and Output Parameters section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
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

