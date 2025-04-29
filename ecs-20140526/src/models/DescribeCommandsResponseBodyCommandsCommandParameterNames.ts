// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsResponseBodyCommandsCommandParameterNames extends $dara.Model {
  parameterName?: string[];
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parameterName)) {
      $dara.Model.validateArray(this.parameterName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

