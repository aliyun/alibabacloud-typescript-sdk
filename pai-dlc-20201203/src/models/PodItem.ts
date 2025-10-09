// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PodItem extends $dara.Model {
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:05Z
   */
  gmtStartTime?: string;
  historyPods?: PodItem[];
  /**
   * @example
   * 10.0.1.2
   */
  ip?: string;
  nodeName?: string;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz-worker-0
   */
  podId?: string;
  podIp?: string;
  /**
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @example
   * Stopped
   */
  status?: string;
  subStatus?: string;
  /**
   * @example
   * Worker
   */
  type?: string;
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
      podUid: 'PodUid',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
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
      podUid: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyPods)) {
      $dara.Model.validateArray(this.historyPods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

