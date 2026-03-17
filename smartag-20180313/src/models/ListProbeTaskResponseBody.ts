// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProbeTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name that is probed by the task.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the probe task is enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the probe task was created.
   * 
   * @example
   * 2022-11-23 14:09
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the probe task was modified.
   * 
   * @example
   * 2022-11-23 14:09
   */
  gmtModify?: string;
  /**
   * @remarks
   * The number of probe packets transmitted by the probe task per minute.
   * 
   * @example
   * 10
   */
  packetNumber?: number;
  /**
   * @remarks
   * The port that is probed by the task.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the probe task.
   * 
   * @example
   * probe-****
   */
  probeTaskId?: string;
  /**
   * @remarks
   * The source address of the probe task.
   * 
   * @example
   * 192.168.1.1
   */
  probeTaskSourceAddress?: string;
  /**
   * @remarks
   * The protocol of the probe task. Valid values:
   * 
   * *   **ICMP**
   * *   **TCP**
   * *   **HTTP**
   * 
   * > Tasks that probe private networks support only ICMP and TCP.
   * 
   * @example
   * ICMP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-asdfz6ac74oj5v****
   */
  sagId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * @example
   * sag****
   */
  sn?: string;
  /**
   * @remarks
   * The name of the probe task.
   * 
   * @example
   * test-ping
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the probe task. Valid values:
   * 
   * *   **Internet**: probes a public network.
   * *   **Intranet**: probes a private network.
   * 
   * @example
   * Internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskId: 'ProbeTaskId',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      gmtCreate: 'string',
      gmtModify: 'string',
      packetNumber: 'number',
      port: 'number',
      probeTaskId: 'string',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
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

export class ListProbeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the probe task.
   * 
   * @example
   * probe-xxx
   */
  data?: ListProbeTaskResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 324223F3-93D3-4CE4-B26F-66C0C3809922
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListProbeTaskResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

