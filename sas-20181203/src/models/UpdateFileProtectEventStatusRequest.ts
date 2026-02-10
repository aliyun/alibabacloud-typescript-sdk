// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The severities of alerts.
   */
  alertLevels?: number[];
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1649040221
   */
  endTime?: number;
  /**
   * @remarks
   * The IDs of the events.
   */
  id?: number[];
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * test
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
   * The name of the defense rule.
   * 
   * @example
   * tetsRule
   */
  ruleName?: string;
  /**
   * @remarks
   * Whether to choose all fields across industries.
   * 
   * - **true**: yes
   * - **false**: no
   * 
   * @example
   * true
   */
  selectAllAcrossPages?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1680919232000
   */
  startTime?: number;
  /**
   * @remarks
   * The handling status of the event. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: handled
   * *   **2**: added to the whitelist
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * eb2c782e-64f2-4590-a86c-d90164df****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevels: 'AlertLevels',
      endTime: 'EndTime',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      operation: 'Operation',
      ruleName: 'RuleName',
      selectAllAcrossPages: 'SelectAllAcrossPages',
      startTime: 'StartTime',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevels: { 'type': 'array', 'itemType': 'number' },
      endTime: 'number',
      id: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      operation: 'string',
      ruleName: 'string',
      selectAllAcrossPages: 'boolean',
      startTime: 'number',
      status: 'number',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertLevels)) {
      $dara.Model.validateArray(this.alertLevels);
    }
    if(Array.isArray(this.id)) {
      $dara.Model.validateArray(this.id);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

