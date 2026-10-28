// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PodNetworkInterface } from "./PodNetworkInterface";


export class PodItem extends $dara.Model {
  /**
   * @remarks
   * The time when the pod was created (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the pod was completed (UTC).
   * 
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The time when the pod was started (UTC).
   * 
   * @example
   * 2021-01-12T14:36:05Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The historical pods.
   */
  historyPods?: PodItem[];
  /**
   * @remarks
   * Pod Ip
   * 
   * @example
   * 10.0.1.2
   */
  ip?: string;
  /**
   * @remarks
   * The name of the compute node where the pod is located.
   * 
   * @example
   * i-a
   */
  nodeName?: string;
  /**
   * @remarks
   * Pod Id
   * 
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz-worker-0
   */
  podId?: string;
  /**
   * @remarks
   * The IP address of the pod.
   * 
   * @example
   * 10.0.1.2
   */
  podIp?: string;
  /**
   * @remarks
   * The IP addresses of the pod. For Lingjun AI Computing Service: user VPC net0, management VPC net, and pod-to-pod communication ethx. For general-purpose computing: user VPC eth1 with dedicated gateway default route, management VPC eth0 with public gateway default route, and pod-to-pod communication net eRDMA.
   */
  podIps?: PodNetworkInterface[];
  /**
   * @remarks
   * Pod Uid
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The status of the pod.
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The substatus of the pod.
   * 
   * @example
   * Restarting
   */
  subStatus?: string;
  /**
   * @remarks
   * The type of the pod.
   * 
   * @example
   * Worker
   */
  type?: string;
  /**
   * @remarks
   * The list of supported profiling types, separated by commas, such as sysom. An empty string indicates that profiling is not supported.
   * 
   * @example
   * sysom
   */
  supportedProfilingTypes?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      historyPods: 'HistoryPods',
      ip: 'Ip',
      nodeName: 'NodeName',
      podId: 'PodId',
      podIp: 'PodIp',
      podIps: 'PodIps',
      podUid: 'PodUid',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
      supportedProfilingTypes: 'supportedProfilingTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      historyPods: { 'type': 'array', 'itemType': PodItem },
      ip: 'string',
      nodeName: 'string',
      podId: 'string',
      podIp: 'string',
      podIps: { 'type': 'array', 'itemType': PodNetworkInterface },
      podUid: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
      supportedProfilingTypes: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyPods)) {
      $dara.Model.validateArray(this.historyPods);
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

