// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * > You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to obtain the check item ID.>Notice: When this parameter is specified, the Uuid parameter is required..
   * 
   * @example
   * 1
   */
  checkId?: string;
  /**
   * @remarks
   * The alert ID of the check item.
   * 
   * > To query the details of a specified check item, provide the alert ID of the check item. You can call the [DescribeCheckWarnings](~~DescribeCheckWarnings~~) operation to obtain this ID.
   * >Notice: This parameter is required when both Uuid and CheckId are empty..
   * 
   * @example
   * 98675301
   */
  checkWarningId?: number;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * test_container
   */
  containerName?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of the member accounts in the resource folder.
   * >You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 16670360956*****
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
   * The UUID of the server to query.
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.>Notice: When this parameter is specified, the CheckId parameter is required..
   * 
   * @example
   * 06125d19-6a02-4451-9f65-2083996e****
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

