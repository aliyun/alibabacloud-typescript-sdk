// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulNumStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the request.
   * * When querying data related to Security Center, set this parameter to **sas**.
   * * When querying data related to Server Guard, you do not need to specify this parameter.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the member accounts (Alibaba Cloud accounts) in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the value of this parameter.
   * 
   * @example
   * 127608589417****
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

