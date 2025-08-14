// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList extends $dara.Model {
  /**
   * @remarks
   * The duration of the recording cycle. Unit: seconds.
   * 
   * @example
   * 21600
   */
  cycleDuration?: number;
  /**
   * @remarks
   * The output file format.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The name of the recording file that is stored in Object Storage Service (OSS).
   * 
   * @example
   * record/{JobId}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The duration of a single segment. Unit: seconds.
   * 
   * @example
   * 30
   */
  sliceDuration?: number;
  /**
   * @remarks
   * The name of the TS segment.
   * 
   * @example
   * record/{JobId}/{UnixTimestamp}_{Sequence}
   */
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

export class ListLiveRecordTemplatesResponseBodyRecordTemplateList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the template was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T03:26:36Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test template
   */
  name?: string;
  /**
   * @remarks
   * The list of recording formats.
   */
  recordFormatList?: ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList[];
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModified: 'LastModified',
      name: 'Name',
      recordFormatList: 'RecordFormatList',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastModified: 'string',
      name: 'string',
      recordFormatList: { 'type': 'array', 'itemType': ListLiveRecordTemplatesResponseBodyRecordTemplateListRecordFormatList },
      templateId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordFormatList)) {
      $dara.Model.validateArray(this.recordFormatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
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
   * The list of recording templates.
   */
  recordTemplateList?: ListLiveRecordTemplatesResponseBodyRecordTemplateList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA98A0C-7870-15FE-B96F-8880BB600A2C
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * Valid values:
   * 
   * *   asc: sorts the query results in ascending order.
   * *   desc: sorts the query results in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      recordTemplateList: 'RecordTemplateList',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      recordTemplateList: { 'type': 'array', 'itemType': ListLiveRecordTemplatesResponseBodyRecordTemplateList },
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordTemplateList)) {
      $dara.Model.validateArray(this.recordTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

