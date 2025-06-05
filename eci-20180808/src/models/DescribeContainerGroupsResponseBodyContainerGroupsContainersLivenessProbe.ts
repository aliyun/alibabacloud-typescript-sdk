// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket";


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe extends $dara.Model {
  /**
   * @remarks
   * The commands that are used to check the containers.
   */
  execs?: string[];
  /**
   * @remarks
   * The minimum number of consecutive failures that must occur for the check to be considered failed. Default value: 3.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The HTTP GET method that is used to check the container.
   */
  httpGet?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds between the time when the startup of the container ends and the time when the probe starts.
   * 
   * @example
   * 10
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the health check is performed. Default value: 10. Minimum value: 1. Unit: seconds.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The minimum number of consecutive successes that must occur for the check to be considered successful. Default value: 1. The value must be 1.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The TCP socket method that is used to check the container.
   */
  tcpSocket?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period of the check. Default value: 1. Minimum value: 1. Unit: seconds.
   * 
   * @example
   * 10
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      execs: 'Execs',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execs: { 'type': 'array', 'itemType': 'string' },
      failureThreshold: 'number',
      httpGet: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.execs)) {
      $dara.Model.validateArray(this.execs);
    }
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

