// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to access OSS.
   * 
   * @example
   * STS.NTm*****8tu
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret used to access OSS.
   * 
   * @example
   * 9NG*****K4X
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The OSS bucket that is used to store the architecture image.
   * 
   * @example
   * bucket-1
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * https://oss-cn-beijing.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The token that is used to access the Object Storage Service (OSS) bucket that stores the architecture image.
   * 
   * @example
   * ABCD
   */
  securityToken?: string;
  /**
   * @remarks
   * The OSS bucket that is used to save data snapshots.
   * 
   * @example
   * bucket-2
   */
  snapshotBucket?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      securityToken: 'SecurityToken',
      snapshotBucket: 'SnapshotBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      securityToken: 'string',
      snapshotBucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the token.
   */
  data?: GetTokenResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
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

