// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig extends $dara.Model {
  appName?: string;
  autoCompose?: string;
  composeVodTranscodeGroupId?: string;
  createTime?: string;
  cycleDuration?: number;
  domainName?: string;
  onDemand?: number;
  storageLocation?: string;
  streamName?: string;
  vodTranscodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      autoCompose: 'AutoCompose',
      composeVodTranscodeGroupId: 'ComposeVodTranscodeGroupId',
      createTime: 'CreateTime',
      cycleDuration: 'CycleDuration',
      domainName: 'DomainName',
      onDemand: 'OnDemand',
      storageLocation: 'StorageLocation',
      streamName: 'StreamName',
      vodTranscodeGroupId: 'VodTranscodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      autoCompose: 'string',
      composeVodTranscodeGroupId: 'string',
      createTime: 'string',
      cycleDuration: 'number',
      domainName: 'string',
      onDemand: 'number',
      storageLocation: 'string',
      streamName: 'string',
      vodTranscodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigs extends $dara.Model {
  liveRecordVodConfig?: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig[];
  static names(): { [key: string]: string } {
    return {
      liveRecordVodConfig: 'LiveRecordVodConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVodConfig: { 'type': 'array', 'itemType': DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig },
    };
  }

  validate() {
    if(Array.isArray(this.liveRecordVodConfig)) {
      $dara.Model.validateArray(this.liveRecordVodConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseBody extends $dara.Model {
  liveRecordVodConfigs?: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigs;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5056369B-D337-499E-B8B7-B761BD37B08A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      liveRecordVodConfigs: 'LiveRecordVodConfigs',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVodConfigs: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigs,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'string',
    };
  }

  validate() {
    if(this.liveRecordVodConfigs && typeof (this.liveRecordVodConfigs as any).validate === 'function') {
      (this.liveRecordVodConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

