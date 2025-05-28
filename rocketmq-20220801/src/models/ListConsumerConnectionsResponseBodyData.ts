// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConsumerConnectionsResponseBodyDataConnections } from "./ListConsumerConnectionsResponseBodyDataConnections";


export class ListConsumerConnectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client connection list
   */
  connections?: ListConsumerConnectionsResponseBodyDataConnections[];
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'connections',
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConsumerConnectionsResponseBodyDataConnections },
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

