// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessKeysResponseBodyAccessKeysAccessKey extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * 0wNEpMMlzy7s****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values: Active and Inactive.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
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

