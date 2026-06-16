// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSampleDetailResponseBodyResultObjectColumnStats extends $dara.Model {
  /**
   * @remarks
   * De-duplication count.
   * 
   * @example
   * 23
   */
  distinctNumber?: number;
  /**
   * @remarks
   * De-duplication rate.
   * 
   * @example
   * 23.87%
   */
  distinctRate?: string;
  /**
   * @remarks
   * Field Name.
   * 
   * @example
   * repoName
   */
  fieldName?: string;
  /**
   * @remarks
   * Number of missing values.
   * 
   * @example
   * 3
   */
  missNumber?: number;
  /**
   * @remarks
   * Missing rate.
   * 
   * @example
   * 25.32%
   */
  missRate?: string;
  /**
   * @remarks
   * Row number of the record.
   * 
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
  /**
   * @remarks
   * Header information returned.
   */
  headers?: string[];
  /**
   * @remarks
   * Row data.
   */
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
  /**
   * @remarks
   * Columns.
   */
  columnStats?: GetSampleDetailResponseBodyResultObjectColumnStats[];
  /**
   * @remarks
   * The time filter Type. You can filter by the last 7 Days, last 30 Days, last 6 months, or Custom.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * The download URL of the file.
   * 
   * @example
   * https://cas-documents-service.oss-cn-shanghai.aliyuncs.com/Batch_Upload_Monitor_Domain.xlsx?Expires=1753755419&OSSAccessKeyId=****&Signature=****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * File name.  
   * > The file name must end with .txt or .sql. For example, test.txt or test.sql.
   * 
   * @example
   * 回溯朴道_建模样本_样本量694049_part_01-(定制增强版).csv
   */
  fileName?: string;
  /**
   * @remarks
   * File Size (bytes).
   * 
   * @example
   * 199
   */
  fileSize?: number;
  /**
   * @remarks
   * Table data.
   */
  previewData?: GetSampleDetailResponseBodyResultObjectPreviewData;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * ios_fb
   */
  remark?: string;
  /**
   * @remarks
   * The number of result records returned.
   * 
   * @example
   * 325
   */
  rowCount?: number;
  /**
   * @remarks
   * The sample ID.
   * 
   * @example
   * 1
   */
  sampleId?: number;
  /**
   * @remarks
   * Sample name.
   * 
   * @example
   * SampleTest
   */
  sampleName?: string;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @remarks
   * File upload time.
   * 
   * @example
   * 2024-09-27 10:23:40
   */
  uploadTime?: string;
  /**
   * @remarks
   * Uploader.
   * 
   * @example
   * dsg
   */
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
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Request result.
   */
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

