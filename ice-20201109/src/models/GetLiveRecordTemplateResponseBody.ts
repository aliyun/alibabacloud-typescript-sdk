// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveRecordTemplateResponseBodyRecordTemplateRecordFormatList extends $dara.Model {
  /**
   * @remarks
   * The duration of the recording cycle. Unit: seconds. If you do not specify this parameter, the default value 6 hours is used.
   * 
   * @example
   * 7200
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
   * record/{JobId}/{Sequence}{EscapedStartTime}{EscapedEndTime}
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

export class GetLiveRecordTemplateResponseBodyRecordTemplate extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T03:26:36Z
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
  recordFormatList?: GetLiveRecordTemplateResponseBodyRecordTemplateRecordFormatList[];
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
   * Valid values:
   * 
   * *   system
   * *   custom
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
      recordFormatList: { 'type': 'array', 'itemType': GetLiveRecordTemplateResponseBodyRecordTemplateRecordFormatList },
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

export class GetLiveRecordTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recording template.
   */
  recordTemplate?: GetLiveRecordTemplateResponseBodyRecordTemplate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C892855F-95DF-50D6-A28C-279ABDB76810
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordTemplate: 'RecordTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordTemplate: GetLiveRecordTemplateResponseBodyRecordTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordTemplate && typeof (this.recordTemplate as any).validate === 'function') {
      (this.recordTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

