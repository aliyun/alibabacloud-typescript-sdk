// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket";


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe extends $dara.Model {
  /**
   * @remarks
   * The commands that are run in the container when you use a CLI to perform health checks.
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
  httpGet?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds between the time when the startup of the container ends and the time when the probe starts.
   * 
   * @example
   * 5
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the health check is performed. Default value: 10. Minimum value: 1. Unit: seconds.
   * 
   * @example
   * 1
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
  tcpSocket?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period of the check. Default value: 1. Minimum value: 1. Unit: seconds.
   * 
   * @example
   * 1
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
      httpGet: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket,
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

