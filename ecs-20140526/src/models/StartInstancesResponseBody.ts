// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartInstancesResponseBodyInstanceResponses } from "./StartInstancesResponseBodyInstanceResponses";


export class StartInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ECS instance, such as the status of each instance before and after the operation is called and the operation results.
   */
  instanceResponses?: StartInstancesResponseBodyInstanceResponses;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceResponses: 'InstanceResponses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponses: StartInstancesResponseBodyInstanceResponses,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceResponses && typeof (this.instanceResponses as any).validate === 'function') {
      (this.instanceResponses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

