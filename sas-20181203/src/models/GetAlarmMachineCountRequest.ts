// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmMachineCountRequest extends $dara.Model {
  /**
   * @remarks
   * The request source identifier. Set this parameter to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member account in the resource directory.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
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

