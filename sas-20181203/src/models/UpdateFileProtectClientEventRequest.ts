// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectClientEventRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert notification levels.
   */
  alertLevels?: number[];
  /**
   * @remarks
   * The timestamp of the end time.
   * 
   * @example
   * 1650470399999
   */
  endTime?: number;
  /**
   * @remarks
   * The list of excluded event IDs.
   */
  excludeIdList?: number[];
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
   * The list of event IDs.
   */
  idList?: number[];
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
   * test
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
   * The internal IP address.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The new status. Valid values:
   * 
   * - **0**: Unhandled.
   * - **1**: Handled.
   * - **2**: Whitelisted.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newStatus?: number;
  /**
   * @remarks
   * The type of the operation.
   * 
   * @example
   * READ
   */
  operation?: string;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * /root/1111/****
   */
  procPath?: string;
  /**
   * @remarks
   * The remarks.
   */
  remark?: string[];
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * tetsRule
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether to select all.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  selectAll?: boolean;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1649260800000
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
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the protected server.
   * 
   * @example
   * ae1527a9-2308-46ab-b10a-48ae7ff7****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevels: 'AlertLevels',
      endTime: 'EndTime',
      excludeIdList: 'ExcludeIdList',
      filePath: 'FilePath',
      idList: 'IdList',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      newStatus: 'NewStatus',
      operation: 'Operation',
      procPath: 'ProcPath',
      remark: 'Remark',
      ruleName: 'RuleName',
      selectAll: 'SelectAll',
      startTime: 'StartTime',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevels: { 'type': 'array', 'itemType': 'number' },
      endTime: 'number',
      excludeIdList: { 'type': 'array', 'itemType': 'number' },
      filePath: 'string',
      idList: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      newStatus: 'number',
      operation: 'string',
      procPath: 'string',
      remark: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      selectAll: 'boolean',
      startTime: 'number',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertLevels)) {
      $dara.Model.validateArray(this.alertLevels);
    }
    if(Array.isArray(this.excludeIdList)) {
      $dara.Model.validateArray(this.excludeIdList);
    }
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    if(Array.isArray(this.remark)) {
      $dara.Model.validateArray(this.remark);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

