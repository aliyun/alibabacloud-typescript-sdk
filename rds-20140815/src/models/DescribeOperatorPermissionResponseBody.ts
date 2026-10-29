// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperatorPermissionResponseBody extends $dara.Model {
  /**
   * @example
   * 2026-10-12T02:27:04Z
   */
  createdTime?: string;
  /**
   * @example
   * 2030-01-01T11:58:17Z
   */
  expiredTime?: string;
  /**
   * @example
   * Control,Data
   */
  privileges?: string;
  /**
   * @example
   * 4C3535DC-743E-505A-B4F6-ABC***75C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      expiredTime: 'ExpiredTime',
      privileges: 'Privileges',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      expiredTime: 'string',
      privileges: 'string',
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

