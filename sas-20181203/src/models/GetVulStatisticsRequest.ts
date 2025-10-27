// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset group. Separate multiple IDs with commas (,).
   * 
   * >  You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of asset groups.
   * 
   * This parameter is required.
   * 
   * @example
   * 9997897
   */
  groupIdList?: string;
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
   * The source IP address of the request.
   * 
   * @example
   * 10.12.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the vulnerability whose statistics you want to query. Separate multiple types with commas (,). Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **emg**: urgent vulnerability
   * *   **app**: vulnerability detected by using a web scanner
   * *   **sca**: vulnerability detected based on software component analysis
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  typeList?: string;
  static names(): { [key: string]: string } {
    return {
      groupIdList: 'GroupIdList',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdList: 'string',
      resourceDirectoryAccountId: 'number',
      sourceIp: 'string',
      typeList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

