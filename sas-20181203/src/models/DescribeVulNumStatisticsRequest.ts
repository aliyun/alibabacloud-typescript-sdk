// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulNumStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The request source.
   * * When querying Security Center data, set this parameter to **sas**.
   * * When querying Server Guard data, you do not need to set this parameter.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The member account ID in the resource directory (Alibaba Cloud account).
   * >You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
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

