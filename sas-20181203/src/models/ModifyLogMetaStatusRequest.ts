// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogMetaStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request source. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The name of the dedicated Logstore in which logs are stored.
   * 
   * >  You can call the [DescribeLogMeta](~~DescribeLogMeta~~) operation to query the names of Logstores.
   * 
   * This parameter is required.
   * 
   * @example
   * aegis-log-login
   */
  logStore?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * >  You can call the [DescribeLogMeta](~~DescribeLogMeta~~) operation to query the names of projects.
   * 
   * @example
   * aegis-log
   */
  project?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The status of the log analysis feature. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * This parameter is required.
   * 
   * @example
   * disabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      logStore: 'LogStore',
      project: 'Project',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      logStore: 'string',
      project: 'string',
      resourceDirectoryAccountId: 'number',
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

