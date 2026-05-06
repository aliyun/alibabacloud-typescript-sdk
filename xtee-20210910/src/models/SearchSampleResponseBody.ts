// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSampleResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * icekredit_model_A_2025c_1755826424_870000.csv
   */
  fileName?: string;
  /**
   * @example
   * 572
   */
  fileSize?: number;
  /**
   * @example
   * ios_velo
   */
  remark?: string;
  /**
   * @example
   * 325
   */
  rowCount?: number;
  /**
   * @example
   * 9b020e69bbae49d88c07a377c3ab7a71
   */
  sampleId?: number;
  /**
   * @example
   * Test
   */
  sampleName?: string;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * 2023-12-01 12:23:34
   */
  uploadTime?: string;
  /**
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

