// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveCenterTransferResponseBodyLiveCenterTransferInfoListLiveCenterTransferInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * teststream
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The third-party URL to which the live stream is relayed.
   * 
   * @example
   * rtmp://push.example2.aliyunlive.com/testapp1/teststream2
   */
  dstUrl?: string;
  /**
   * @remarks
   * The end time of stream relay.
   * 
   * @example
   * 2022-04-29T15:16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of stream relay.
   * 
   * @example
   * 2022-04-28T15:16:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  /**
   * @remarks
   * The validity period of stream relay. Valid values:
   * 
   * *   **always**: The stream can always be relayed.
   * *   **time**: The stream can be relayed in a specified time period.
   * 
   * @example
   * time
   */
  transferArgs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      dstUrl: 'DstUrl',
      endTime: 'EndTime',
      startTime: 'StartTime',
      streamName: 'StreamName',
      transferArgs: 'TransferArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      dstUrl: 'string',
      endTime: 'string',
      startTime: 'string',
      streamName: 'string',
      transferArgs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCenterTransferResponseBodyLiveCenterTransferInfoList extends $dara.Model {
  liveCenterTransferInfo?: DescribeLiveCenterTransferResponseBodyLiveCenterTransferInfoListLiveCenterTransferInfo[];
  static names(): { [key: string]: string } {
    return {
      liveCenterTransferInfo: 'LiveCenterTransferInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveCenterTransferInfo: { 'type': 'array', 'itemType': DescribeLiveCenterTransferResponseBodyLiveCenterTransferInfoListLiveCenterTransferInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveCenterTransferInfo)) {
      $dara.Model.validateArray(this.liveCenterTransferInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveCenterTransferResponseBody extends $dara.Model {
  /**
   * @remarks
   * The stream relay information.
   */
  liveCenterTransferInfoList?: DescribeLiveCenterTransferResponseBodyLiveCenterTransferInfoList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4865B85-664B-19D3-BB16-C62FB83C8226
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveCenterTransferInfoList: 'LiveCenterTransferInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveCenterTransferInfoList: DescribeLiveCenterTransferResponseBodyLiveCenterTransferInfoList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveCenterTransferInfoList && typeof (this.liveCenterTransferInfoList as any).validate === 'function') {
      (this.liveCenterTransferInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

