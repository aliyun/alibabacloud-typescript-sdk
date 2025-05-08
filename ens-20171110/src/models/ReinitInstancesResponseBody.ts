// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceOperateResponse } from "./InstanceOperateResponse";


export class ReinitInstancesResponseBody extends $dara.Model {
  instanceResponses?: InstanceOperateResponse[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceResponses: 'InstanceResponses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponses: { 'type': 'array', 'itemType': InstanceOperateResponse },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceResponses)) {
      $dara.Model.validateArray(this.instanceResponses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

