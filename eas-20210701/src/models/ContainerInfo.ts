// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerInfo extends $dara.Model {
  /**
   * @remarks
   * The reason why the container is in the current state.
   * 
   * @example
   * PodInitializing
   */
  currentReaon?: string;
  /**
   * @remarks
   * The current state of the container. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Terminated
   * 
   * @example
   * Waiting
   */
  currentStatus?: string;
  /**
   * @remarks
   * The time when the container entered the current state.
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
   * The reason why the container is in the last state.
   * 
   * @example
   * Error
   */
  lastReason?: string;
  /**
   * @remarks
   * The last state of the container. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Terminated
   * 
   * @example
   * Terminated
   */
  lastStatus?: string;
  /**
   * @remarks
   * The time when the container entered the last state.
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
   * The port number.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Indicates whether the container passed the health check.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of times the container restarted.
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

