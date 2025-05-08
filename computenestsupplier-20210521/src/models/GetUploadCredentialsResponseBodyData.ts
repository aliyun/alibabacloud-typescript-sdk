// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadCredentialsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUCe19W1FKaHAYAhe********
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * 8LQGp59mY23pcXeTdcvSA1cUQZBeD92sFrXi********
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * service-info-private
   */
  bucketName?: string;
  /**
   * @remarks
   * The time when the AccessKey pair expires.
   * 
   * @example
   * 2023-05-18T12:27:59Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * 221514575922756034/cn-hangzhou/d57c62fbd508xxxxxxxx.json
   */
  key?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * CAISzQN1q6Ft5B2yfSjIr5b2LouNuu5n/KOjQ3/wjGUHYdlagYGdmzz2IH1Le3NrBO8esfgymGFU6v8dlo1dYLQeHhadQI5cs80HtFqLSNaE65LswPlZ2M2ISETPJzfV9pCK
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expireDate: 'ExpireDate',
      key: 'Key',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expireDate: 'string',
      key: 'string',
      regionId: 'string',
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

