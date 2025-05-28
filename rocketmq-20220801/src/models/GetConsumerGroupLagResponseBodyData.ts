// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataTopicLagMapValue } from "./DataTopicLagMapValue";
import { GetConsumerGroupLagResponseBodyDataTotalLag } from "./GetConsumerGroupLagResponseBodyDataTotalLag";


export class GetConsumerGroupLagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Consumer Group ID
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Backlog for each topic
   */
  topicLagMap?: { [key: string]: DataTopicLagMapValue };
  /**
   * @remarks
   * Total lag count
   */
  totalLag?: GetConsumerGroupLagResponseBodyDataTotalLag;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
      topicLagMap: 'topicLagMap',
      totalLag: 'totalLag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
      topicLagMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataTopicLagMapValue },
      totalLag: GetConsumerGroupLagResponseBodyDataTotalLag,
    };
  }

  validate() {
    if(this.topicLagMap) {
      $dara.Model.validateMap(this.topicLagMap);
    }
    if(this.totalLag && typeof (this.totalLag as any).validate === 'function') {
      (this.totalLag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

