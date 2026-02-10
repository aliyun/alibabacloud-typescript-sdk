// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveCenterTransferResponseBodyLiveCenterTransferInfoListLiveCenterTransferInfo extends $dara.Model {
  appName?: string;
  domainName?: string;
  dstUrl?: string;
  endTime?: string;
  startTime?: string;
  streamName?: string;
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

