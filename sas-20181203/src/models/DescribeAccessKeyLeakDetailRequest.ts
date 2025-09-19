// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessKeyLeakDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair leak event.
   * 
   * > You can call the [DescribeAccesskeyLeakList](~~DescribeAccesskeyLeakList~~) operation to obtain the event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 389357
   */
  id?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to query the ID.
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

