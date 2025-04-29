// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsResponseBodyCommandsCommandParameterDefinitionsParameterDefinitionPossibleValues extends $dara.Model {
  possibleValue?: string[];
  static names(): { [key: string]: string } {
    return {
      possibleValue: 'PossibleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      possibleValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.possibleValue)) {
      $dara.Model.validateArray(this.possibleValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

