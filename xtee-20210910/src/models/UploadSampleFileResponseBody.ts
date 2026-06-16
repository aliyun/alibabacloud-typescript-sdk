// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSampleFileResponseBodyResultObjectColumnStats extends $dara.Model {
  /**
   * @remarks
   * De-duplication Count.
   * 
   * @example
   * 4
   */
  distinctNumber?: number;
  /**
   * @remarks
   * De-duplication rate.
   * 
   * @example
   * 28.23%
   */
  distinctRate?: string;
  /**
   * @remarks
   * Field Name.
   * 
   * @example
   * fb_org_id
   */
  fieldName?: string;
  /**
   * @remarks
   * Number of missing values.
   * 
   * @example
   * 5
   */
  missNumber?: number;
  /**
   * @remarks
   * Missing rate.
   * 
   * @example
   * 28.23%
   */
  missRate?: string;
  /**
   * @remarks
   * Row number of the record.
   * 
   * @example
   * 4
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

export class UploadSampleFileResponseBodyResultObjectPreviewData extends $dara.Model {
  /**
   * @remarks
   * Table header.
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

export class UploadSampleFileResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Number of jobs.
   * 
   * @example
   * gd
   */
  beyondBacktrackingPeriodNum?: number;
  /**
   * @remarks
   * Columns.
   */
  columnStats?: UploadSampleFileResponseBodyResultObjectColumnStats[];
  /**
   * @remarks
   * Time type.
   * 
   * @example
   * yyyyMMdd
   */
  dateType?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * Acct71b_Sample140934_md5_batch20250916.csv
   */
  fileName?: string;
  /**
   * @remarks
   * File Size.
   * 
   * @example
   * 1472
   */
  fileSize?: number;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * saf/cpoc/30e2aff8f355af429bbab18f776496ef/1764037297543_icekredit_model_A_2025b_1764034785_147787.csv
   */
  fileUrl?: string;
  /**
   * @remarks
   * Non-existent scenarios.
   */
  notExistScenes?: string[];
  /**
   * @remarks
   * Number.
   */
  phoneInvalidList?: string[];
  /**
   * @remarks
   * Table data.
   */
  previewData?: UploadSampleFileResponseBodyResultObjectPreviewData;
  /**
   * @remarks
   * Number of rows.
   * 
   * @example
   * 4974
   */
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      beyondBacktrackingPeriodNum: 'BeyondBacktrackingPeriodNum',
      columnStats: 'ColumnStats',
      dateType: 'DateType',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileUrl: 'FileUrl',
      notExistScenes: 'NotExistScenes',
      phoneInvalidList: 'PhoneInvalidList',
      previewData: 'PreviewData',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beyondBacktrackingPeriodNum: 'number',
      columnStats: { 'type': 'array', 'itemType': UploadSampleFileResponseBodyResultObjectColumnStats },
      dateType: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileUrl: 'string',
      notExistScenes: { 'type': 'array', 'itemType': 'string' },
      phoneInvalidList: { 'type': 'array', 'itemType': 'string' },
      previewData: UploadSampleFileResponseBodyResultObjectPreviewData,
      rowCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columnStats)) {
      $dara.Model.validateArray(this.columnStats);
    }
    if(Array.isArray(this.notExistScenes)) {
      $dara.Model.validateArray(this.notExistScenes);
    }
    if(Array.isArray(this.phoneInvalidList)) {
      $dara.Model.validateArray(this.phoneInvalidList);
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

export class UploadSampleFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result.
   */
  resultObject?: UploadSampleFileResponseBodyResultObject;
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
      resultObject: UploadSampleFileResponseBodyResultObject,
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

