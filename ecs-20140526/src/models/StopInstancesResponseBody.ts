// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StopInstancesResponseBodyInstanceResponses } from "./StopInstancesResponseBodyInstanceResponses";


export class StopInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance-specific responses, which contain the status of each instance before and after the operation was called and the results of the operation.
   */
  instanceResponses?: StopInstancesResponseBodyInstanceResponses;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C488B66-B819-4D14-8711-C4EAAA13AC01
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
      instanceResponses: StopInstancesResponseBodyInstanceResponses,
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

