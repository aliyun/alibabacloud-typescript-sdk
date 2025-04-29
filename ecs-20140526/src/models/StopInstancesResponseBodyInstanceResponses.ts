// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StopInstancesResponseBodyInstanceResponsesInstanceResponse } from "./StopInstancesResponseBodyInstanceResponsesInstanceResponse";


export class StopInstancesResponseBodyInstanceResponses extends $dara.Model {
  instanceResponse?: StopInstancesResponseBodyInstanceResponsesInstanceResponse[];
  static names(): { [key: string]: string } {
    return {
      instanceResponse: 'InstanceResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponse: { 'type': 'array', 'itemType': StopInstancesResponseBodyInstanceResponsesInstanceResponse },
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

