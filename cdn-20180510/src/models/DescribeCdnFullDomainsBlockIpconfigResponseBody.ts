// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnFullDomainsBlockIPConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * The value of Code is not 0 in the following scenarios:
   * 
   * *   The format of the IP address is invalid.
   * *   The number of IP addresses exceeds the upper limit.
   * *   Other abnormal scenarios.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned results. If the operation is successful, URLs of OSS objects are returned. If the operation fails, an error message is returned.
   * 
   * @example
   * http://xxxx-api.oss-cn-hangzhou.aliyuncs.com/blocklist%2Fxxxxxxxxxxxx.txt?Expires=1682663947&OSSAccessKeyId=xxxxxxxxxx&Signature=xxxxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95994621-8382-464B-8762-C708E73568D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

