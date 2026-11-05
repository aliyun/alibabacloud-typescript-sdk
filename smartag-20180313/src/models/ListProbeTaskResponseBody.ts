// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProbeTaskResponseBodyData extends $dara.Model {
  domain?: string;
  enable?: boolean;
  gmtCreate?: string;
  gmtModify?: string;
  packetNumber?: number;
  port?: number;
  probeTaskId?: string;
  probeTaskSourceAddress?: string;
  protocol?: string;
  sagId?: string;
  sn?: string;
  taskName?: string;
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
  code?: string;
  data?: ListProbeTaskResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

