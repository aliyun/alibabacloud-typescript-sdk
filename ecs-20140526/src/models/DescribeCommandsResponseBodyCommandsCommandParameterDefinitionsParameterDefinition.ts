// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues } from "./DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues";


export class DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition extends $dara.Model {
  /**
   * @remarks
   * The default value of the custom parameter.
   * 
   * @example
   * https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the custom parameter.
   * 
   * @example
   * Download path of the Cloud Assistant Agent installation package.
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom parameter.
   * 
   * @example
   * DownloadUrl
   */
  parameterName?: string;
  /**
   * @remarks
   * The regular expression of the custom parameter.
   * 
   * @example
   * ^[a-zA-Z0-9_-]{4,32}$
   */
  patternRegex?: string;
  /**
   * @remarks
   * The valid values of the custom parameter of the enumeration type.
   */
  possibleValues?: DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues;
  /**
   * @remarks
   * Indicates whether the custom parameter is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      parameterName: 'ParameterName',
      patternRegex: 'PatternRegex',
      possibleValues: 'PossibleValues',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      parameterName: 'string',
      patternRegex: 'string',
      possibleValues: DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues,
      required: 'boolean',
    };
  }

  validate() {
    if(this.possibleValues && typeof (this.possibleValues as any).validate === 'function') {
      (this.possibleValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

