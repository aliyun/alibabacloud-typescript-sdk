// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportBillDetailDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download path of the exported file.
   * 
   * @example
   * http://test-oss.com/image_01.jpeg
   */
  filePath?: string;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * BEA05990-B90D-594F-8C8E-650AEEB94C5D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

