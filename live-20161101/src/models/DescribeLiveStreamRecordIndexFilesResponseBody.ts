// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoListRecordIndexInfo extends $dara.Model {
  appName?: string;
  createTime?: string;
  domainName?: string;
  duration?: number;
  endTime?: string;
  format?: string;
  height?: number;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  recordId?: string;
  recordUrl?: string;
  startTime?: string;
  streamName?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      duration: 'Duration',
      endTime: 'EndTime',
      format: 'Format',
      height: 'Height',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      recordId: 'RecordId',
      recordUrl: 'RecordUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      domainName: 'string',
      duration: 'number',
      endTime: 'string',
      format: 'string',
      height: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      recordId: 'string',
      recordUrl: 'string',
      startTime: 'string',
      streamName: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoList extends $dara.Model {
  recordIndexInfo?: DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoListRecordIndexInfo[];
  static names(): { [key: string]: string } {
    return {
      recordIndexInfo: 'RecordIndexInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIndexInfo: { 'type': 'array', 'itemType': DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoListRecordIndexInfo },
    };
  }

  validate() {
    if(Array.isArray(this.recordIndexInfo)) {
      $dara.Model.validateArray(this.recordIndexInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  recordIndexInfoList?: DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE24625C-7C0F-4020-8448-9C31A50C1556
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the specified conditions.
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
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      recordIndexInfoList: 'RecordIndexInfoList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
      recordIndexInfoList: DescribeLiveStreamRecordIndexFilesResponseBodyRecordIndexInfoList,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.recordIndexInfoList && typeof (this.recordIndexInfoList as any).validate === 'function') {
      (this.recordIndexInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

