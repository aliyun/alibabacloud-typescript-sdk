// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition } from "./DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition";


export class DescribeCommandsResponseBodyCommandsCommandParameterDefinitions extends $dara.Model {
  parameterDefinition?: DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition[];
  static names(): { [key: string]: string } {
    return {
      parameterDefinition: 'ParameterDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDefinition: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinition },
    };
  }

  validate() {
    if(Array.isArray(this.parameterDefinition)) {
      $dara.Model.validateArray(this.parameterDefinition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

