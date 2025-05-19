// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo } from "./GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo";


export class GetTrafficControlTaskTrafficResponseBody extends $dara.Model {
  requestId?: string;
  trafficControlTaskTrafficInfo?: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTaskTrafficInfo: 'TrafficControlTaskTrafficInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTaskTrafficInfo: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo,
    };
  }

  validate() {
    if(this.trafficControlTaskTrafficInfo && typeof (this.trafficControlTaskTrafficInfo as any).validate === 'function') {
      (this.trafficControlTaskTrafficInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

