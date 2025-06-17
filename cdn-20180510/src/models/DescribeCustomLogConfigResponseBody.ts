// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The format of the log configuration.
   * 
   * @example
   * $time_iso8601_$request_method_$
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 94E3559F-7B6A-4A5E-AFFD-44E2A208A249
   */
  requestId?: string;
  /**
   * @remarks
   * The sample.
   * 
   * @example
   * "[9/Jun/2015:01:58:09 +0800] 188.165.15.75 - 1542 \\"-\\" \\"GEThttp: //www.aliyun.com/index.html\\" 200
   */
  sample?: string;
  /**
   * @remarks
   * The tag information about the log configuration.
   * 
   * @example
   * img1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      requestId: 'RequestId',
      sample: 'Sample',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      requestId: 'string',
      sample: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

