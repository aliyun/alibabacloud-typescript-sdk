// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOrUpdateOssConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * xxx
   */
  bucketName?: string;
  /**
   * @remarks
   * Indicates whether the OSS configuration is active. \\`1\\`: The configuration is active. \\`0\\`: The configuration is inactive.
   * 
   * @example
   * 1
   */
  enable?: string;
  /**
   * @remarks
   * The endpoint of OSS.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      enable: 'Enable',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      enable: 'string',
      endpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOrUpdateOssConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: SaveOrUpdateOssConfigResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success. \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SaveOrUpdateOssConfigResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

