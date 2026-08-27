// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAccessKeyResponseBodyAccessKey extends $dara.Model {
  /**
   * @remarks
   * The identity of the AccessKey pair.
   * 
   * @example
   * 0wNEpMMlzy7s****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey pair.
   * 
   * @example
   * PupkTg8jdmau1cXxYacgE736PJ****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was created. The time is in UTC. Format: `YYYY-MM-DDThh:mm:ssZ`.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status. Valid values: Active and Inactive.
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
   * The AccessKey pair.
   */
  accessKey?: CreateAccessKeyResponseBodyAccessKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

