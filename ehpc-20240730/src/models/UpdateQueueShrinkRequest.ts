// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQueueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * Call [ListClusters](https://help.aliyun.com/document_detail/87116.html) to get the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The queue information to update.
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

