// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedDictResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * test_dict.plain
   */
  fileName?: string;
  /**
   * @example
   * 40
   */
  fileSize?: number;
  /**
   * @example
   * 9
   */
  limit?: number;
  /**
   * @example
   * cloudtest01/661767e1-5ae3-4ec5-865f-03039436893a/sacc2*****
   */
  ossUrl?: string;
  /**
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-XXXXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * 1719919421
   */
  uploadTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      fileName: 'FileName',
      fileSize: 'FileSize',
      limit: 'Limit',
      ossUrl: 'OssUrl',
      requestId: 'RequestId',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      fileName: 'string',
      fileSize: 'number',
      limit: 'number',
      ossUrl: 'string',
      requestId: 'string',
      uploadTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

