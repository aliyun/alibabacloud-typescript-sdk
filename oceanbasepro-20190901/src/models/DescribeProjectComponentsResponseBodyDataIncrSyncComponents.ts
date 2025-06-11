// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectComponentsResponseBodyDataIncrSyncComponentsErrorDetails } from "./DescribeProjectComponentsResponseBodyDataIncrSyncComponentsErrorDetails";


export class DescribeProjectComponentsResponseBodyDataIncrSyncComponents extends $dara.Model {
  /**
   * @example
   * 2023-07-13T09:19:53
   */
  checkpoint?: string;
  /**
   * @example
   * 1689250071
   */
  checkpointSampleTimestamp?: number;
  /**
   * @example
   * 1
   */
  delay?: number;
  errorDetails?: DescribeProjectComponentsResponseBodyDataIncrSyncComponentsErrorDetails[];
  /**
   * @example
   * 2023-07-13T18:04:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-07-13T18:04:36
   */
  gmtModify?: string;
  /**
   * @example
   * np_4w***
   */
  identity?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  ip?: string;
  /**
   * @example
   * xxx.xxx.xxx.1-9000:connector_v2:np_4w****jxc-incr_trans-1-0:0000000277
   */
  name?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  region?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  subtopics?: string[];
  /**
   * @example
   * 1
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      checkpointSampleTimestamp: 'CheckpointSampleTimestamp',
      delay: 'Delay',
      errorDetails: 'ErrorDetails',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      identity: 'Identity',
      ip: 'Ip',
      name: 'Name',
      region: 'Region',
      status: 'Status',
      subtopics: 'Subtopics',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      checkpointSampleTimestamp: 'number',
      delay: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataIncrSyncComponentsErrorDetails },
      gmtCreate: 'string',
      gmtModify: 'string',
      identity: 'string',
      ip: 'string',
      name: 'string',
      region: 'string',
      status: 'string',
      subtopics: { 'type': 'array', 'itemType': 'string' },
      tps: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    if(Array.isArray(this.subtopics)) {
      $dara.Model.validateArray(this.subtopics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

