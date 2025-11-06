// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStatisticsByVhostResponseBodyDataConnectionStatisticsChannelStatisticsListChannelStatistics extends $dara.Model {
  ackQps?: number;
  confirmQps?: number;
  deliverQps?: number;
  getQps?: number;
  prefetch?: number;
  publishQps?: number;
  state?: number;
  unacked?: number;
  unconfirmed?: number;
  static names(): { [key: string]: string } {
    return {
      ackQps: 'AckQps',
      confirmQps: 'ConfirmQps',
      deliverQps: 'DeliverQps',
      getQps: 'GetQps',
      prefetch: 'Prefetch',
      publishQps: 'PublishQps',
      state: 'State',
      unacked: 'Unacked',
      unconfirmed: 'Unconfirmed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackQps: 'number',
      confirmQps: 'number',
      deliverQps: 'number',
      getQps: 'number',
      prefetch: 'number',
      publishQps: 'number',
      state: 'number',
      unacked: 'number',
      unconfirmed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsByVhostResponseBodyDataConnectionStatisticsChannelStatisticsList extends $dara.Model {
  channelStatistics?: GetStatisticsByVhostResponseBodyDataConnectionStatisticsChannelStatisticsListChannelStatistics[];
  static names(): { [key: string]: string } {
    return {
      channelStatistics: 'ChannelStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelStatistics: { 'type': 'array', 'itemType': GetStatisticsByVhostResponseBodyDataConnectionStatisticsChannelStatisticsListChannelStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.channelStatistics)) {
      $dara.Model.validateArray(this.channelStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsByVhostResponseBodyDataConnectionStatistics extends $dara.Model {
  accessKey?: string;
  channelNum?: number;
  channelStatisticsList?: GetStatisticsByVhostResponseBodyDataConnectionStatisticsChannelStatisticsList;
  connectionName?: string;
  deliverQps?: number;
  protocol?: string;
  publishQps?: number;
  remoteAddress?: string;
  securityTransport?: boolean;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      channelNum: 'ChannelNum',
      channelStatisticsList: 'ChannelStatisticsList',
      connectionName: 'ConnectionName',
      deliverQps: 'DeliverQps',
      protocol: 'Protocol',
      publishQps: 'PublishQps',
      remoteAddress: 'RemoteAddress',
      securityTransport: 'SecurityTransport',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      channelNum: 'number',
      channelStatisticsList: GetStatisticsByVhostResponseBodyDataConnectionStatisticsChannelStatisticsList,
      connectionName: 'string',
      deliverQps: 'number',
      protocol: 'string',
      publishQps: 'number',
      remoteAddress: 'string',
      securityTransport: 'boolean',
      state: 'number',
    };
  }

  validate() {
    if(this.channelStatisticsList && typeof (this.channelStatisticsList as any).validate === 'function') {
      (this.channelStatisticsList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsByVhostResponseBodyData extends $dara.Model {
  connectionStatistics?: GetStatisticsByVhostResponseBodyDataConnectionStatistics[];
  static names(): { [key: string]: string } {
    return {
      connectionStatistics: 'ConnectionStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatistics: { 'type': 'array', 'itemType': GetStatisticsByVhostResponseBodyDataConnectionStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.connectionStatistics)) {
      $dara.Model.validateArray(this.connectionStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsByVhostResponseBody extends $dara.Model {
  code?: number;
  data?: GetStatisticsByVhostResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetStatisticsByVhostResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

