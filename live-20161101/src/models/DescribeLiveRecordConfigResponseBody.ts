// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat extends $dara.Model {
  cycleDuration?: number;
  format?: string;
  ossObjectPrefix?: string;
  sliceDuration?: number;
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
      sliceOssObjectPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatList extends $dara.Model {
  recordFormat?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: { 'type': 'array', 'itemType': DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatListRecordFormat },
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

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeRecordFormatListRecordFormat extends $dara.Model {
  cycleDuration?: number;
  format?: string;
  ossObjectPrefix?: string;
  sliceDuration?: number;
  sliceOssObjectPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      cycleDuration: 'CycleDuration',
      format: 'Format',
      ossObjectPrefix: 'OssObjectPrefix',
      sliceDuration: 'SliceDuration',
      sliceOssObjectPrefix: 'SliceOssObjectPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDuration: 'number',
      format: 'string',
      ossObjectPrefix: 'string',
      sliceDuration: 'number',
      sliceOssObjectPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeRecordFormatList extends $dara.Model {
  recordFormat?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeRecordFormatListRecordFormat[];
  static names(): { [key: string]: string } {
    return {
      recordFormat: 'RecordFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFormat: { 'type': 'array', 'itemType': DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeRecordFormatListRecordFormat },
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

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeTemplates extends $dara.Model {
  templates?: string[];
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecord extends $dara.Model {
  appName?: string;
  createTime?: string;
  delayTime?: number;
  domainName?: string;
  endTime?: string;
  onDemond?: number;
  ossBucket?: string;
  ossEndpoint?: string;
  recordFormatList?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatList;
  startTime?: string;
  streamName?: string;
  transcodeRecordFormatList?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeRecordFormatList;
  transcodeTemplates?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeTemplates;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createTime: 'CreateTime',
      delayTime: 'DelayTime',
      domainName: 'DomainName',
      endTime: 'EndTime',
      onDemond: 'OnDemond',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      recordFormatList: 'RecordFormatList',
      startTime: 'StartTime',
      streamName: 'StreamName',
      transcodeRecordFormatList: 'TranscodeRecordFormatList',
      transcodeTemplates: 'TranscodeTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      delayTime: 'number',
      domainName: 'string',
      endTime: 'string',
      onDemond: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      recordFormatList: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordRecordFormatList,
      startTime: 'string',
      streamName: 'string',
      transcodeRecordFormatList: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeRecordFormatList,
      transcodeTemplates: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecordTranscodeTemplates,
    };
  }

  validate() {
    if(this.recordFormatList && typeof (this.recordFormatList as any).validate === 'function') {
      (this.recordFormatList as any).validate();
    }
    if(this.transcodeRecordFormatList && typeof (this.transcodeRecordFormatList as any).validate === 'function') {
      (this.transcodeRecordFormatList as any).validate();
    }
    if(this.transcodeTemplates && typeof (this.transcodeTemplates as any).validate === 'function') {
      (this.transcodeTemplates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBodyLiveAppRecordList extends $dara.Model {
  liveAppRecord?: DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeLiveRecordConfigResponseBodyLiveAppRecordListLiveAppRecord },
    };
  }

  validate() {
    if(Array.isArray(this.liveAppRecord)) {
      $dara.Model.validateArray(this.liveAppRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordConfigResponseBody extends $dara.Model {
  liveAppRecordList?: DescribeLiveRecordConfigResponseBodyLiveAppRecordList;
  /**
   * @remarks
   * The sorting order of recording configurations by creation time.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
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
   * The total number of recording configurations that meet the specified conditions.
   * 
   * @example
   * 12
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 20
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      liveAppRecordList: 'LiveAppRecordList',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecordList: DescribeLiveRecordConfigResponseBodyLiveAppRecordList,
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.liveAppRecordList && typeof (this.liveAppRecordList as any).validate === 'function') {
      (this.liveAppRecordList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

