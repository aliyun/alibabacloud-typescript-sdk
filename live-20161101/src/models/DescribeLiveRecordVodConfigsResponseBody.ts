// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * Indicates whether automatic merging is enabled. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * ON
   */
  autoCompose?: string;
  /**
   * @remarks
   * The ID of the transcoding template group that was used to automatically merge the VOD files created from the live streams.
   * 
   * >  This parameter is returned if the value of the AutoCompose parameter is ON.
   * 
   * @example
   * dadfcaadde****
   */
  composeVodTranscodeGroupId?: string;
  /**
   * @remarks
   * The time when the live stream was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T17:37:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The recording cycle. Unit: seconds. Default value: **3600**. Valid values: **300 to 21600**.
   * 
   * @example
   * 360
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether on-demand recording is enabled. Valid values:
   * 
   * *   **0** (default): On-demand recording is disabled.
   * *   **1**: On-demand recording is enabled by using the HTTP callback method.
   * 
   * @example
   * 0
   */
  onDemand?: number;
  /**
   * @remarks
   * The storage location.
   * 
   * @example
   * ****-tjptr2vatm.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The ID of the transcoding template group in ApsaraVideo VOD.
   * 
   * @example
   * e2d796d3bb5fd8049d32bff62f94****
   */
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
  /**
   * @remarks
   * The configurations.
   */
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

