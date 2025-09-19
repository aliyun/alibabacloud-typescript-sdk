// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated Logstore in which logs are stored.
   * 
   * >  You can call the [DescribeLogMeta](~~DescribeLogMeta~~) operation to query the name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * aegis-log-login
   */
  logStore?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
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

