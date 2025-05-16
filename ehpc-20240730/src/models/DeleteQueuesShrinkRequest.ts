// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQueuesShrinkRequest extends $dara.Model {
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
   * The queues that you want to delete.
   */
  queueNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNamesShrink: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

