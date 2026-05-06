// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSampleDetailResponseBodyResultObjectColumnStats extends $dara.Model {
  /**
   * @example
   * 23
   */
  distinctNumber?: number;
  /**
   * @example
   * 23.87%
   */
  distinctRate?: string;
  /**
   * @example
   * repoName
   */
  fieldName?: string;
  /**
   * @example
   * 3
   */
  missNumber?: number;
  /**
   * @example
   * 25.32%
   */
  missRate?: string;
  /**
   * @example
   * 2
   */
  rowNumber?: number;
  static names(): { [key: string]: string } {
    return {
      distinctNumber: 'DistinctNumber',
      distinctRate: 'DistinctRate',
      fieldName: 'FieldName',
      missNumber: 'MissNumber',
      missRate: 'MissRate',
      rowNumber: 'RowNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctNumber: 'number',
      distinctRate: 'string',
      fieldName: 'string',
      missNumber: 'number',
      missRate: 'string',
      rowNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSampleDetailResponseBodyResultObjectPreviewData extends $dara.Model {
  headers?: string[];
  rows?: string[][];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': 'string' },
      rows: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSampleDetailResponseBodyResultObject extends $dara.Model {
  columnStats?: GetSampleDetailResponseBodyResultObjectColumnStats[];
  /**
   * @example
   * month
   */
  dateType?: string;
  /**
   * @example
   * https://cas-documents-service.oss-cn-shanghai.aliyuncs.com/Batch_Upload_Monitor_Domain.xlsx?Expires=1753755419&OSSAccessKeyId=****&Signature=****
   */
  downloadUrl?: string;
  fileName?: string;
  /**
   * @example
   * 199
   */
  fileSize?: number;
  previewData?: GetSampleDetailResponseBodyResultObjectPreviewData;
  /**
   * @example
   * ios_fb
   */
  remark?: string;
  /**
   * @example
   * 325
   */
  rowCount?: number;
  /**
   * @example
   * 1
   */
  sampleId?: number;
  /**
   * @example
   * SampleTest
   */
  sampleName?: string;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * 2024-09-27 10:23:40
   */
  uploadTime?: string;
  uploadUserName?: string;
  static names(): { [key: string]: string } {
    return {
      columnStats: 'ColumnStats',
      dateType: 'DateType',
      downloadUrl: 'DownloadUrl',
      fileName: 'FileName',
      fileSize: 'FileSize',
      previewData: 'PreviewData',
      remark: 'Remark',
      rowCount: 'RowCount',
      sampleId: 'SampleId',
      sampleName: 'SampleName',
      tab: 'Tab',
      uploadTime: 'UploadTime',
      uploadUserName: 'UploadUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnStats: { 'type': 'array', 'itemType': GetSampleDetailResponseBodyResultObjectColumnStats },
      dateType: 'string',
      downloadUrl: 'string',
      fileName: 'string',
      fileSize: 'number',
      previewData: GetSampleDetailResponseBodyResultObjectPreviewData,
      remark: 'string',
      rowCount: 'number',
      sampleId: 'number',
      sampleName: 'string',
      tab: 'string',
      uploadTime: 'string',
      uploadUserName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnStats)) {
      $dara.Model.validateArray(this.columnStats);
    }
    if(this.previewData && typeof (this.previewData as any).validate === 'function') {
      (this.previewData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSampleDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  resultObject?: GetSampleDetailResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: GetSampleDetailResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

