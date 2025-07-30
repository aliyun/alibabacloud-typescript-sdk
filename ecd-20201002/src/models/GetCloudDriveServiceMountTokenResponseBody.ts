// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudDriveServiceMountTokenResponseBodyToken extends $dara.Model {
  /**
   * @example
   * h****
   */
  domainId?: string;
  /**
   * @example
   * 2022-10-10T04:41:35Z
   */
  expiredAfter?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 7836fa6eced7dc8d54c775k34iu3h4i2kh534f****
   */
  token?: string;
  /**
   * @example
   * 6050416754750
   */
  totalSize?: number;
  /**
   * @example
   * 605089
   */
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      expiredAfter: 'ExpiredAfter',
      status: 'Status',
      token: 'Token',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      expiredAfter: 'string',
      status: 'string',
      token: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenResponseBody extends $dara.Model {
  /**
   * @example
   * DC27288A-F9E1-5092-9B5B-71C27D15****
   */
  requestId?: string;
  token?: GetCloudDriveServiceMountTokenResponseBodyToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: GetCloudDriveServiceMountTokenResponseBodyToken,
    };
  }

  validate() {
    if(this.token && typeof (this.token as any).validate === 'function') {
      (this.token as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

