// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiExportsResponseBodyApiExports extends $dara.Model {
  /**
   * @remarks
   * The time when the export task was created. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1725604852
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * file_16109541456445334c0f01d9a7444e0e908***.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The download URL of the exported file.
   * 
   * @example
   * https://waf-api-sec-cn.***.aliyuncs.com/file_1610954145***.csv
   */
  fileUrl?: string;
  /**
   * @remarks
   * The format of the exported file, such as CSV.
   * 
   * @example
   * CSV
   */
  format?: string;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * - **expired**: The file has expired.
   * 
   * - **exporting**: The file is being exported.
   * 
   * - **completed**: The export is successful.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The type of the export task. Valid values:
   * 
   * - **apisec_api**: API asset task.
   * 
   * - **apisec_abnormal**: API threat task.
   * 
   * - **apisec_event**: API security event task.
   * 
   * @example
   * apisec_api
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      format: 'Format',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      fileName: 'string',
      fileUrl: 'string',
      format: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiExportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of API security export tasks.
   */
  apiExports?: DescribeApiExportsResponseBodyApiExports[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D9532525-E885-54E7-A178-D5554D563AFB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of export tasks.
   * 
   * @example
   * 7
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiExports: 'ApiExports',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiExports: { 'type': 'array', 'itemType': DescribeApiExportsResponseBodyApiExports },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiExports)) {
      $dara.Model.validateArray(this.apiExports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

