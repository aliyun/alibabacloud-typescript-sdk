// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceGroupSourceFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The OSS persistent storage path of the replacement file.
   * 
   * @example
   * oss://example/new.txt
   */
  filePath?: string;
  /**
   * @remarks
   * The OSS persistent storage path of the replacement file.
   * 
   * @example
   * https://example.com/new.txt
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID of the replacement file.
   * 
   * @example
   * file_example
   */
  fileRecordId?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Project resources
   */
  name?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * E68654BD-F7BA-5837-8686-5645D739A47C
   */
  requestId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * source_example
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type. The value is fixed as FILE.
   * 
   * @example
   * example
   */
  sourceType?: string;
  /**
   * @remarks
   * The data source status. Valid values:
   * - **1**: Online.
   * - **0**: Offline.
   * 
   * @example
   * example
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      filePath: 'filePath',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      filePath: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

