// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessKeyLeakDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair leak event to query.
   * 
   * > Call the [DescribeAccesskeyLeakList](~~DescribeAccesskeyLeakList~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 389357
   */
  id?: number;
  /**
   * @remarks
   * The ID of the member account in the resource directory (Alibaba Cloud account).
   * > Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

