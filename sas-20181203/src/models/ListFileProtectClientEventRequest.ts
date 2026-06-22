// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectClientEventRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert notification levels.
   */
  alertLevels?: number[];
  /**
   * @remarks
   * The page number of the current page when paging is used in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end timestamp.
   * 
   * @example
   * 1650470399999
   */
  endTime?: number;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /etc/pam****
   */
  filePath?: string;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * ca_cpm_****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 120.27.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The type of operation performed on the file. Valid values:
   * 
   * - **DELETE**: deletes the file.
   * - **WRITE**: writes to the file.
   * - **READ**: reads the file.
   * - **RENAME**: renames the file.
   * - **CHOWN**: changes the file owner and associated group.
   * 
   * @example
   * READ
   */
  operation?: string;
  /**
   * @remarks
   * The maximum number of entries per page when paging is used in a paged query.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * c:/windows/system32/i****
   */
  procPath?: string;
  /**
   * @remarks
   * The name of the configuration rule.
   * 
   * @example
   * text-001
   */
  ruleName?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1650470399999
   */
  startTime?: number;
  /**
   * @remarks
   * The event status. Valid values:
   * - **0**: Unhandled.
   * - **1**: Handled.
   * - **2**: Whitelisted.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevels: 'AlertLevels',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      operation: 'Operation',
      pageSize: 'PageSize',
      procPath: 'ProcPath',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevels: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      endTime: 'number',
      filePath: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      operation: 'string',
      pageSize: 'number',
      procPath: 'string',
      ruleName: 'string',
      startTime: 'number',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertLevels)) {
      $dara.Model.validateArray(this.alertLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

