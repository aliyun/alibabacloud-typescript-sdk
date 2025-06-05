// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupStatusResponseBodyDataPodStatusConditions } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusConditions";
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses";
import { DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps";


export class DescribeContainerGroupStatusResponseBodyDataPodStatus extends $dara.Model {
  /**
   * @remarks
   * The conditions of the container group.
   */
  conditions?: DescribeContainerGroupStatusResponseBodyDataPodStatusConditions[];
  /**
   * @remarks
   * The statuses about the containers.
   */
  containerStatuses?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses[];
  /**
   * @remarks
   * The IP address of the host.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The lifecycle phase of the container group.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * The IP address of the container group.
   * 
   * @example
   * 192.168.XX.XX
   */
  podIp?: string;
  /**
   * @remarks
   * The IP addresses of the container groups.
   */
  podIps?: DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps[];
  /**
   * @remarks
   * The quality of service (QoS) of the container group.
   * 
   * @example
   * Guaranteed
   */
  qosClass?: string;
  /**
   * @remarks
   * The time when the container started to run.
   * 
   * @example
   * 2021-05-12T07:02:47Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      containerStatuses: 'ContainerStatuses',
      hostIp: 'HostIp',
      phase: 'Phase',
      podIp: 'PodIp',
      podIps: 'PodIps',
      qosClass: 'QosClass',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeContainerGroupStatusResponseBodyDataPodStatusConditions },
      containerStatuses: { 'type': 'array', 'itemType': DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses },
      hostIp: 'string',
      phase: 'string',
      podIp: 'string',
      podIps: { 'type': 'array', 'itemType': DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps },
      qosClass: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.containerStatuses)) {
      $dara.Model.validateArray(this.containerStatuses);
    }
    if(Array.isArray(this.podIps)) {
      $dara.Model.validateArray(this.podIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

