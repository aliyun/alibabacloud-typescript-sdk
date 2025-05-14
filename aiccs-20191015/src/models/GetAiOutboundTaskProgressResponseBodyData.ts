// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAiOutboundTaskProgressResponseBodyDataCalloutProgress } from "./GetAiOutboundTaskProgressResponseBodyDataCalloutProgress";
import { GetAiOutboundTaskProgressResponseBodyDataTaskProgress } from "./GetAiOutboundTaskProgressResponseBodyDataTaskProgress";


export class GetAiOutboundTaskProgressResponseBodyData extends $dara.Model {
  calloutProgress?: GetAiOutboundTaskProgressResponseBodyDataCalloutProgress;
  /**
   * @example
   * 123456
   */
  taskId?: number;
  taskProgress?: GetAiOutboundTaskProgressResponseBodyDataTaskProgress;
  /**
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      calloutProgress: 'CalloutProgress',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calloutProgress: GetAiOutboundTaskProgressResponseBodyDataCalloutProgress,
      taskId: 'number',
      taskProgress: GetAiOutboundTaskProgressResponseBodyDataTaskProgress,
      type: 'number',
    };
  }

  validate() {
    if(this.calloutProgress && typeof (this.calloutProgress as any).validate === 'function') {
      (this.calloutProgress as any).validate();
    }
    if(this.taskProgress && typeof (this.taskProgress as any).validate === 'function') {
      (this.taskProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

