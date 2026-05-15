// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfigRecordFormatListRecordFormat extends $dara.Model {
  autoCompose?: string;
  format?: string;
  processMethod?: string;
  processTemplateId?: string;
  sliceDuration?: number;
  tags?: string;
  videoProcess?: string;
  static names(): { [key: string]: string } {
    return {
      autoCompose: 'AutoCompose',
      format: 'Format',
      processMethod: 'ProcessMethod',
      processTemplateId: 'ProcessTemplateId',
      sliceDuration: 'SliceDuration',
      tags: 'Tags',
      videoProcess: 'VideoProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCompose: 'string',
      format: 'string',
      processMethod: 'string',
      processTemplateId: 'string',
      sliceDuration: 'number',
      tags: 'string',
      videoProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfigRecordFormatList extends $dara.Model {
  recordFormat?: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfigRecordFormatListRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: { 'type': 'array', 'itemType': DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfigRecordFormatListRecordFormat },
    };
  }

  validate() {
    if(Array.isArray(this.recordFormat)) {
      $dara.Model.validateArray(this.recordFormat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfig extends $dara.Model {
  appName?: string;
  autoCompose?: string;
  composeVodTranscodeGroupId?: string;
  createTime?: string;
  cycleDuration?: number;
  delayTime?: number;
  domainName?: string;
  formatConfig?: boolean;
  onDemand?: number;
  recordContent?: string;
  recordFormatList?: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfigRecordFormatList;
  spaceId?: string;
  storageLocation?: string;
  streamName?: string;
  transcodeTemplates?: string;
  vodTranscodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      autoCompose: 'AutoCompose',
      composeVodTranscodeGroupId: 'ComposeVodTranscodeGroupId',
      createTime: 'CreateTime',
      cycleDuration: 'CycleDuration',
      delayTime: 'DelayTime',
      domainName: 'DomainName',
      formatConfig: 'FormatConfig',
      onDemand: 'OnDemand',
      recordContent: 'RecordContent',
      recordFormatList: 'RecordFormatList',
      spaceId: 'SpaceId',
      storageLocation: 'StorageLocation',
      streamName: 'StreamName',
      transcodeTemplates: 'TranscodeTemplates',
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
      delayTime: 'number',
      domainName: 'string',
      formatConfig: 'boolean',
      onDemand: 'number',
      recordContent: 'string',
      recordFormatList: DescribeLiveRecordVodConfigsResponseBodyLiveRecordVodConfigsLiveRecordVodConfigRecordFormatList,
      spaceId: 'string',
      storageLocation: 'string',
      streamName: 'string',
      transcodeTemplates: 'string',
      vodTranscodeGroupId: 'string',
    };
  }

  validate() {
    if(this.recordFormatList && typeof (this.recordFormatList as any).validate === 'function') {
      (this.recordFormatList as any).validate();
    }
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

