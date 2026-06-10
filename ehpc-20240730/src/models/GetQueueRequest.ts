// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call [ListClusters](https://help.aliyun.com/document_detail/87116.html) to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * comp
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

