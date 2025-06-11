// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectComponentsResponseBodyDataReverseStoreListErrorDetails } from "./DescribeProjectComponentsResponseBodyDataReverseStoreListErrorDetails";


export class DescribeProjectComponentsResponseBodyDataReverseStoreList extends $dara.Model {
  /**
   * @example
   * 2023-07-13T09:19:53
   */
  beginCheckpoint?: string;
  /**
   * @example
   * 1
   */
  conn?: number;
  /**
   * @example
   * 1
   */
  delay?: number;
  /**
   * @example
   * 2023-07-13T09:19:53
   */
  endCheckpoint?: string;
  /**
   * @example
   * null
   */
  errMsg?: string;
  errorDetails?: DescribeProjectComponentsResponseBodyDataReverseStoreListErrorDetails[];
  /**
   * @example
   * 1689250071
   */
  gmt?: number;
  /**
   * @example
   * 2023-07-13T18:04:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-07-13T18:04:36
   */
  gmtModified?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  ip?: string;
  /**
   * @example
   * 1689250071
   */
  latelyHeartbeatTimeSec?: number;
  /**
   * @example
   * xxx.xxx.xxx.1-9000:connector_v2:np_4w****9jxc-incr_trans-1-0:0000000277
   */
  name?: string;
  /**
   * @example
   * 2883
   */
  port?: number;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * EXCEPTION
   */
  status?: string;
  /**
   * @example
   * 2882
   */
  storePort?: number;
  /**
   * @remarks
   * SubTopic。
   * 
   * @example
   * null
   */
  subtopic?: string;
  /**
   * @example
   * false
   */
  toSwitch?: boolean;
  /**
   * @remarks
   * Topic。
   * 
   * @example
   * null
   */
  topic?: string;
  /**
   * @example
   * 1
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      beginCheckpoint: 'BeginCheckpoint',
      conn: 'Conn',
      delay: 'Delay',
      endCheckpoint: 'EndCheckpoint',
      errMsg: 'ErrMsg',
      errorDetails: 'ErrorDetails',
      gmt: 'Gmt',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      latelyHeartbeatTimeSec: 'LatelyHeartbeatTimeSec',
      name: 'Name',
      port: 'Port',
      region: 'Region',
      status: 'Status',
      storePort: 'StorePort',
      subtopic: 'Subtopic',
      toSwitch: 'ToSwitch',
      topic: 'Topic',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCheckpoint: 'string',
      conn: 'number',
      delay: 'number',
      endCheckpoint: 'string',
      errMsg: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataReverseStoreListErrorDetails },
      gmt: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      ip: 'string',
      latelyHeartbeatTimeSec: 'number',
      name: 'string',
      port: 'number',
      region: 'string',
      status: 'string',
      storePort: 'number',
      subtopic: 'string',
      toSwitch: 'boolean',
      topic: 'string',
      tps: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

