// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueueShrinkRequest extends $dara.Model {
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
  queueShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueShrink: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

