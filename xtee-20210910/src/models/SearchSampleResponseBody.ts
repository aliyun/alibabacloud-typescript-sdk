// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSampleResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * File Name.
   * 
   * @example
   * icekredit_model_A_2025c_1755826424_870000.csv
   */
  fileName?: string;
  /**
   * @remarks
   * File Size.
   * 
   * @example
   * 572
   */
  fileSize?: number;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * ios_velo
   */
  remark?: string;
  /**
   * @remarks
   * Number of Records.
   * 
   * @example
   * 325
   */
  rowCount?: number;
  /**
   * @remarks
   * Sample ID.
   * 
   * @example
   * 9b020e69bbae49d88c07a377c3ab7a71
   */
  sampleId?: number;
  /**
   * @remarks
   * Sample Name.
   * 
   * @example
   * Test
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
   * File Upload Time.
   * 
   * @example
   * 2023-12-01 12:23:34
   */
  uploadTime?: string;
  /**
   * @remarks
   * Uploader.
   * 
   * @example
   * ds
   */
  uploadUserName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
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
      fileName: 'string',
      fileSize: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSampleResponseBody extends $dara.Model {
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
  resultObject?: SearchSampleResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': SearchSampleResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

