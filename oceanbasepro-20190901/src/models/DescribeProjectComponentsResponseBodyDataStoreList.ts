// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectComponentsResponseBodyDataStoreListErrorDetails } from "./DescribeProjectComponentsResponseBodyDataStoreListErrorDetails";


export class DescribeProjectComponentsResponseBodyDataStoreList extends $dara.Model {
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
   * 24
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
  errorDetails?: DescribeProjectComponentsResponseBodyDataStoreListErrorDetails[];
  /**
   * @example
   * 1689250049
   */
  gmt?: number;
  /**
   * @example
   * 2023-07-13T17:29:54
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-07-13T17:29:54
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
   * xxx.xxx.xxx.1-7145:OB_ORACLE_np_4w3r***_4w:0000***97
   */
  name?: string;
  /**
   * @example
   * 2883
   */
  port?: number;
  /**
   * @example
   * cn-shanghai
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
   * OB_ORACLE_np_4w3***c_4w3**-0
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
   * OB_ORACLE_np_4w3r29c_4w3****
   */
  topic?: string;
  /**
   * @example
   * 0
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
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataStoreListErrorDetails },
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

