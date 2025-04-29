// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RebootInstancesResponseBodyInstanceResponsesInstanceResponse } from "./RebootInstancesResponseBodyInstanceResponsesInstanceResponse";


export class RebootInstancesResponseBodyInstanceResponses extends $dara.Model {
  instanceResponse?: RebootInstancesResponseBodyInstanceResponsesInstanceResponse[];
  static names(): { [key: string]: string } {
    return {
      instanceResponse: 'InstanceResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponse: { 'type': 'array', 'itemType': RebootInstancesResponseBodyInstanceResponsesInstanceResponse },
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

