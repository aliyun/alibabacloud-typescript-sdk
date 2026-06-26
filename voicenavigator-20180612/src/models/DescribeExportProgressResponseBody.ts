// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL of the file.
   * 
   * @example
   * http://ssml-test.oss-cn-shanghai.aliyuncs.com/key
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b19af5ce5314ac08108d1b33fe20e15
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the export task.
   * 
   * @example
   * FINISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      requestId: 'string',
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

