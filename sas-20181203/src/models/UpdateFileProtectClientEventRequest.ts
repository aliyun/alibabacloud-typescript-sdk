// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectClientEventRequest extends $dara.Model {
  alertLevels?: number[];
  /**
   * @example
   * 1650470399999
   */
  endTime?: number;
  excludeIdList?: number[];
  /**
   * @example
   * /etc/pam****
   */
  filePath?: string;
  idList?: number[];
  /**
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @example
   * 120.27.XX.XX
   */
  internetIp?: string;
  /**
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newStatus?: number;
  /**
   * @example
   * READ
   */
  operation?: string;
  /**
   * @example
   * /root/1111/****
   */
  procPath?: string;
  remark?: string[];
  /**
   * @example
   * tetsRule
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  selectAll?: boolean;
  /**
   * @example
   * 1649260800000
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
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

