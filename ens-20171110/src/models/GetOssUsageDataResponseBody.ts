// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssUsageDataResponseBodyUsageList extends $dara.Model {
  /**
   * @remarks
   * The inbound bandwidth over the internal network. Unit: Bps.
   * 
   * @example
   * 37865147
   */
  lanRxBw?: number;
  /**
   * @remarks
   * The outbound bandwidth over the internal network. Unit: Bps.
   * 
   * @example
   * 22012187890
   */
  lanTxBw?: number;
  /**
   * @remarks
   * The sequence number of the time point within a day.
   * 
   * @example
   * 144
   */
  point?: number;
  /**
   * @remarks
   * The time point in UTC. Format: 2010-01-21T09:50:23Z.
   * 
   * @example
   * 2022-01-12T00:00:00Z
   */
  pointTs?: string;
  /**
   * @remarks
   * The storage usage. Unit: bytes.
   * 
   * @example
   * 85462146217
   */
  storageUsageByte?: number;
  /**
   * @remarks
   * The inbound bandwidth over the Internet. Unit: Bps.
   * 
   * @example
   * 542155715
   */
  wanRxBw?: number;
  /**
   * @remarks
   * The outbound bandwidth over the Internet. Unit: Bps.
   * 
   * @example
   * 547126175217
   */
  wanTxBw?: number;
  static names(): { [key: string]: string } {
    return {
      lanRxBw: 'LanRxBw',
      lanTxBw: 'LanTxBw',
      point: 'Point',
      pointTs: 'PointTs',
      storageUsageByte: 'StorageUsageByte',
      wanRxBw: 'WanRxBw',
      wanTxBw: 'WanTxBw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lanRxBw: 'number',
      lanTxBw: 'number',
      point: 'number',
      pointTs: 'string',
      storageUsageByte: 'number',
      wanRxBw: 'number',
      wanTxBw: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A8CCD48-14F9-0309-B957-7B1D74A8119D
   */
  requestId?: string;
  /**
   * @remarks
   * The usage array.
   */
  usageList?: GetOssUsageDataResponseBodyUsageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageList: 'UsageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageList: { 'type': 'array', 'itemType': GetOssUsageDataResponseBodyUsageList },
    };
  }

  validate() {
    if(Array.isArray(this.usageList)) {
      $dara.Model.validateArray(this.usageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

