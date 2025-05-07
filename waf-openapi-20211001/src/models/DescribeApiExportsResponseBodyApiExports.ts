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

