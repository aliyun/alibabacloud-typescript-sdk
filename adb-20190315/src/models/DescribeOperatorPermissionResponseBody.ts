// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperatorPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the permissions take effect.
   * 
   * @example
   * 2019-05-20T05:41:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time when the permissions expire.
   * 
   * @example
   * 2019-05-20T07:41:19Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The types of the permissions. Valid values: Control and Data.
   * 
   * @example
   * Control,Data
   */
  privileges?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      expiredTime: 'ExpiredTime',
      privileges: 'Privileges',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      DBClusterId: 'string',
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

