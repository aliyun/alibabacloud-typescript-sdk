// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueTemplate } from "./QueueTemplate";


export class CreateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the queue to be created.
   */
  queue?: QueueTemplate;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queue: QueueTemplate,
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

