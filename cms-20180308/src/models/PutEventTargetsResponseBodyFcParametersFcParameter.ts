// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventTargetsResponseBodyFcParametersFcParameter extends $dara.Model {
  functionName?: string;
  id?: number;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      id: 'number',
      region: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

