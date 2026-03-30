// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed extends $dara.Model {
  /**
   * @remarks
   * The time when the AccessKey pair was used for the last time.
   * 
   * @example
   * 2020-10-16T01:37:37Z
   */
  lastUsedDate?: string;
  /**
   * @remarks
   * The Alibaba Cloud service that was last accessed by using the AccessKey pair.
   * 
   * @example
   * Ram
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      lastUsedDate: 'LastUsedDate',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUsedDate: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the time when the AccessKey pair was used for the last time.
   */
  accessKeyLastUsed?: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B29C79F6-354B-4297-A994-1338CC22A2EC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyLastUsed: 'AccessKeyLastUsed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyLastUsed: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKeyLastUsed && typeof (this.accessKeyLastUsed as any).validate === 'function') {
      (this.accessKeyLastUsed as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

