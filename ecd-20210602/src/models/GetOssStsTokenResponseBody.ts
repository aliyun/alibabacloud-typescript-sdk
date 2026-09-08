// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssStsTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the user.
   * 
   * @example
   * STS.NZeNA1kdCm4QPuAJ9kN******
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The STS temporary AccessKey secret.
   * 
   * @example
   * 9EStV7fgkSQsPuBi576EmNQXLxJGddL2EGyX********
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The logical OSS bucket name.
   * 
   * @example
   * prod-wy-*****
   */
  bucket?: string;
  /**
   * @remarks
   * The project storage path.
   */
  objectKeyPrefix?: string;
  /**
   * @remarks
   * The region to which the current OSS bucket belongs.
   * 
   * @example
   * oss-cn-hangzhou
   */
  ossRegion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The Security Token Service (STS) token.
   * 
   * @example
   * CAISvAN1q6Ft5B2yfSjIr5n2Bez81ZRTgqOGZn6FkHBnXf9qgI6apjz2IH*******
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      objectKeyPrefix: 'ObjectKeyPrefix',
      ossRegion: 'OssRegion',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      objectKeyPrefix: 'string',
      ossRegion: 'string',
      requestId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

