// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueuesRequest extends $dara.Model {
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
   * The names of the queues that you want to query. You can specify up to eight names.
   */
  queueNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNames: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.queueNames)) {
      $dara.Model.validateArray(this.queueNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

