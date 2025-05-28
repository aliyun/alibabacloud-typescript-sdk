// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData } from "./ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData";


export class ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress extends $dara.Model {
  /**
   * @remarks
   * Consumer Group ID
   * 
   * @example
   * GID_TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * rmq-cn-3mp3vblzxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * Last fetch time
   * 
   * @example
   * 1740724080343
   */
  lastFetchTime?: number;
  /**
   * @remarks
   * Consumption progress data
   */
  progressData?: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData;
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
   * The topic name.
   * 
   * @example
   * TOPIC_TEST
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      lastFetchTime: 'lastFetchTime',
      progressData: 'progressData',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      lastFetchTime: 'number',
      progressData: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.progressData && typeof (this.progressData as any).validate === 'function') {
      (this.progressData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

