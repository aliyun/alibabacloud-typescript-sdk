// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogMetaStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The request source identifier. Set this parameter to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The name of the dedicated Logstore where logs are stored.
   * >You can call the [DescribeLogMeta](~~DescribeLogMeta~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * aegis-log-login
   */
  logStore?: string;
  /**
   * @remarks
   * The project name.
   * > You can call the [DescribeLogMeta](~~DescribeLogMeta~~) operation to obtain this parameter.
   * 
   * @example
   * aegis-log
   */
  project?: string;
  /**
   * @remarks
   * The ID of the member account in the resource directory (Alibaba Cloud account).
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The status to which you want to change the log. Valid values:
   * - **enabled**: enabled
   * - **disabled**: disabled.
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

