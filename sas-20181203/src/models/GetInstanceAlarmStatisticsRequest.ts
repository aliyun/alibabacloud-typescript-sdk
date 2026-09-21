// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAlarmStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The data source from which instance alert statistics are collected. Default value: aqs.
   * 
   * Valid values:
   * - **sas**: Threat Detection Service data source.
   * - **aqs**: alert event data.
   * - **honeypot**: cloud honeypot.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The UUID of the server to query.
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * 
   * @example
   * 00fea5a1-9792-4373-ab1e-bb6536ba****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      resourceDirectoryAccountId: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

