// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerInfo extends $dara.Model {
  /**
   * @remarks
   * The reason for the current status.
   * 
   * @example
   * PodInitializing
   */
  currentReaon?: string;
  /**
   * @remarks
   * The current status. Valid values:
   * - Waiting: waiting
   * - Running: running
   * - Terminated: terminated.
   * 
   * @example
   * Waiting
   */
  currentStatus?: string;
  /**
   * @remarks
   * The time when the current status occurred.
   * 
   * @example
   * 2022-03-21T06:17:57Z
   */
  currentTimestamp?: string;
  /**
   * @remarks
   * The image.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/eas/echo_cn-shanghai:v0.0.1-20210129111320
   */
  image?: string;
  /**
   * @remarks
   * The reason for the previous status.
   * 
   * @example
   * Error
   */
  lastReason?: string;
  /**
   * @remarks
   * The previous status. Valid values:
   * - Waiting: waiting
   * - Running: running
   * - Terminated: terminated.
   * 
   * @example
   * Terminated
   */
  lastStatus?: string;
  /**
   * @remarks
   * The time when the previous status occurred.
   * 
   * @example
   * 2022-03-21T05:17:57Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * worker0
   */
  name?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Indicates whether the health check is passed.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of restarts.
   * 
   * @example
   * 0
   */
  restartCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentReaon: 'CurrentReaon',
      currentStatus: 'CurrentStatus',
      currentTimestamp: 'CurrentTimestamp',
      image: 'Image',
      lastReason: 'LastReason',
      lastStatus: 'LastStatus',
      lastTimestamp: 'LastTimestamp',
      name: 'Name',
      port: 'Port',
      ready: 'Ready',
      restartCount: 'RestartCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentReaon: 'string',
      currentStatus: 'string',
      currentTimestamp: 'string',
      image: 'string',
      lastReason: 'string',
      lastStatus: 'string',
      lastTimestamp: 'string',
      name: 'string',
      port: 'number',
      ready: 'boolean',
      restartCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

