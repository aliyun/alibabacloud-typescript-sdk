// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessKeyResponseBodyAccessKey extends $dara.Model {
  /**
   * @remarks
   * The access key ID.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The access key.
   * 
   * @example
   * yourAccessKeySecret
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The creation time of the access key. Format: RFC 3339 (UTC). Example: 2020-10-15T08:08:54Z.
   * 
   * @example
   * 2020-10-15T08:08:54Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status of the access key. Valid values:
   * - Active: Activated.
   * - Inactive: Disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      createDate: 'CreateDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      createDate: 'string',
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

export class CreateAccessKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access key.
   */
  accessKey?: CreateAccessKeyResponseBodyAccessKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 19DDD9F7-AFCC-4D72-8CBA-CCE5A142E7AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: CreateAccessKeyResponseBodyAccessKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKey && typeof (this.accessKey as any).validate === 'function') {
      (this.accessKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

