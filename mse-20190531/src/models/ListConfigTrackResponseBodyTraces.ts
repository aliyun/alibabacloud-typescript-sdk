// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigTrackResponseBodyTraces extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request is sent from the client. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  client?: boolean;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * eir-server.properties
   */
  dataId?: string;
  /**
   * @remarks
   * The response latency. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The event. Valid values:
   * 
   * *   pull: configuration acquisition events
   * *   persist: persistence events
   * 
   * @example
   * pull
   */
  event?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * The logging time.
   * 
   * @example
   * 2022-11-28 15:09:15
   */
  logDate?: string;
  /**
   * @remarks
   * The MD5 value.
   * 
   * @example
   * d21c9091c60daa0ff7ee2f420141e5a0
   */
  md5?: string;
  /**
   * @remarks
   * Indicates whether messages are pushed by a server. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  push?: boolean;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.1.2
   */
  requestIp?: string;
  /**
   * @remarks
   * The response node.
   * 
   * @example
   * mse-1973b9a0-1670834*****-reg-center-0-2
   */
  responseIp?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * ok
   */
  result?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the metric value is collected.
   * 
   * Unit: seconds.
   * 
   * @example
   * 1659666529
   */
  ts?: string;
  /**
   * @remarks
   * The release type. Valid values:
   * 
   * *   beta: beta release
   * *   tag: canary release
   * *   batch: batch release
   * 
   * @example
   * beta
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
      dataId: 'DataId',
      delay: 'Delay',
      event: 'Event',
      group: 'Group',
      logDate: 'LogDate',
      md5: 'Md5',
      push: 'Push',
      requestIp: 'RequestIp',
      responseIp: 'ResponseIp',
      result: 'Result',
      ts: 'Ts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: 'boolean',
      dataId: 'string',
      delay: 'string',
      event: 'string',
      group: 'string',
      logDate: 'string',
      md5: 'string',
      push: 'boolean',
      requestIp: 'string',
      responseIp: 'string',
      result: 'string',
      ts: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

