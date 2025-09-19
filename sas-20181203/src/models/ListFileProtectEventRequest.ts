// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectEventRequest extends $dara.Model {
  /**
   * @remarks
   * The severities of alerts.
   */
  alertLevels?: number[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end timestamp of the query.
   * 
   * @example
   * 1683195595204
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * ca_cpm_****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 120.27.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * Type of operation on a file. eg:
   * 
   * - **DELETE**: delete the file.
   * - **WRITE**: write the file.
   * - **READ**: read the file.
   * - **RENAME**: rename the file.
   * - **CHOWN**: set the file owner and file association group operations.
   * 
   * @example
   * READ
   */
  operation?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * The start timestamp of the query.
   * 
   * @example
   * 1683080489594
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: unhandled
   * *   1: handled
   * *   2: added to the whitelist
   * *   3: ignored
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUID of the server.
   * 
   * @example
   * inet-ecs-4e876cb0-09f7-43b8-82ef-4bc7a937***
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

