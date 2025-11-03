// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to query the IDs of check items.
   * 
   * >  If you specify this parameter, you must also specify the Uuid parameter.
   * 
   * @example
   * 1
   */
  checkId?: string;
  /**
   * @remarks
   * The ID of the alert triggered by the check item.
   * 
   * >  To query the details of a check item, you must provide the ID of the alert that is triggered by the check item. You can call the [DescribeCheckWarnings](~~DescribeCheckWarnings~~) operation to query the IDs of alerts.
   * 
   * >  If the Uuid and CheckId parameters are not specified, this parameter is required.
   * 
   * @example
   * 98675301
   */
  checkWarningId?: number;
  /**
   * @remarks
   * Container name.
   * 
   * @example
   * test_container
   */
  containerName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to query the IDs of Alibaba Cloud accounts.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 103.25.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * >  If you specify this parameter, you must also specify the CheckId parameter.
   * 
   * @example
   * 01aec2da-5b57-4f38-b221-da5a0b2f****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkWarningId: 'CheckWarningId',
      containerName: 'ContainerName',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkWarningId: 'number',
      containerName: 'string',
      lang: 'string',
      resourceDirectoryAccountId: 'number',
      sourceIp: 'string',
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

