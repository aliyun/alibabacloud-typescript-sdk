// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadForeignSampleFileResponseBodyResultObjectColumnStats extends $dara.Model {
  /**
   * @example
   * 4
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

export class UploadForeignSampleFileResponseBodyResultObjectPreviewData extends $dara.Model {
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

export class UploadForeignSampleFileResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 3
   */
  beyondBacktrackingPeriodNum?: number;
  columnStats?: UploadForeignSampleFileResponseBodyResultObjectColumnStats[];
  /**
   * @example
   * yyyyMMdd
   */
  dateType?: string;
  /**
   * @example
   * Acct71b_Sample140934_md5_batch20250916.csv
   */
  fileName?: string;
  /**
   * @example
   * 78
   */
  fileSize?: number;
  /**
   * @example
   * saf/cpoc/34cd7959590ef568086035b956210495/1760580976089_XN_test_1016_100000.csv
   */
  fileUrl?: string;
  notExistScenes?: string[];
  /**
   * @remarks
   * PhoneInvalidList。
   */
  phoneInvalidList?: string[];
  previewData?: UploadForeignSampleFileResponseBodyResultObjectPreviewData;
  /**
   * @example
   * 284
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
      columnStats: { 'type': 'array', 'itemType': UploadForeignSampleFileResponseBodyResultObjectColumnStats },
      dateType: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileUrl: 'string',
      notExistScenes: { 'type': 'array', 'itemType': 'string' },
      phoneInvalidList: { 'type': 'array', 'itemType': 'string' },
      previewData: UploadForeignSampleFileResponseBodyResultObjectPreviewData,
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

export class UploadForeignSampleFileResponseBody extends $dara.Model {
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
  resultObject?: UploadForeignSampleFileResponseBodyResultObject;
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
      resultObject: UploadForeignSampleFileResponseBodyResultObject,
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

