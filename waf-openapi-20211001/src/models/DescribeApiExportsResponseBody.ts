// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiExportsResponseBodyApiExports extends $dara.Model {
  /**
   * @remarks
   * The time when the data export task was created. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1725604852
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the file.
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
   * The format of the exported file.
   * 
   * @example
   * CSV
   */
  format?: string;
  /**
   * @remarks
   * The status of the data export task. Valid values:
   * 
   * * **expired**: The file is expired.
   * 
   * * **exporting**: Data is being exported.
   * 
   * * **completed**: Data is exported.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The type of the data export task. Valid values:
   * 
   * * **apisec_api**: API tasks
   * 
   * * **apisec_abnormal**: API risk tasks
   * 
   * * **apisec_event**: API security event tasks
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
   * The returned data export tasks.
   */
  apiExports?: DescribeApiExportsResponseBodyApiExports[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9532525-E885-54E7-A178-D5554D563AFB
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the data export task. Valid values:
   * 
   * *   **expired**: The file is expired.
   * *   **exporting**: Data is being exported.
   * *   **completed**: Data is exported.
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

