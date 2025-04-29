// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RebootInstancesResponseBodyInstanceResponses } from "./RebootInstancesResponseBodyInstanceResponses";


export class RebootInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about instance-specific responses, which contain the status of each instance before and after the operation is called and the results of the operation.
   */
  instanceResponses?: RebootInstancesResponseBodyInstanceResponses;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      instanceResponses: RebootInstancesResponseBodyInstanceResponses,
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

