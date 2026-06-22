// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectEventRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert notification levels.
   */
  alertLevels?: number[];
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp of the end time.
   * 
   * @example
   * 1683257937775
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * i-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server to query.
   * 
   * @example
   * ca_cpm_****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the asset to query.
   * 
   * @example
   * 120.27.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset to query.
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
   * The maximum number of entries to return on each page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * The timestamp of the start time.
   * 
   * @example
   * 1656038740435
   */
  startTime?: number;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - 0: Unhandled. 
   * - 1: Manually handled.
   * - 2: Whitelisted.
   * - 3: Ignored.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * >You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
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
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      operation: 'Operation',
      pageSize: 'PageSize',
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
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      operation: 'string',
      pageSize: 'string',
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

