// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartInstancesResponseBodyInstanceResponsesInstanceResponse } from "./StartInstancesResponseBodyInstanceResponsesInstanceResponse";


export class StartInstancesResponseBodyInstanceResponses extends $dara.Model {
  instanceResponse?: StartInstancesResponseBodyInstanceResponsesInstanceResponse[];
  static names(): { [key: string]: string } {
    return {
      instanceResponse: 'InstanceResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponse: { 'type': 'array', 'itemType': StartInstancesResponseBodyInstanceResponsesInstanceResponse },
    };
  }

  validate() {
    if(Array.isArray(this.instanceResponse)) {
      $dara.Model.validateArray(this.instanceResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

