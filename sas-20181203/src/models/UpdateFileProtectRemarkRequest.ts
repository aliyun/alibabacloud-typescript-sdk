// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * Alert notification level list.
   */
  alertLevels?: number[];
  /**
   * @remarks
   * End time timestamp.
   * 
   * @example
   * 1649040221
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1764
   */
  id?: number;
  /**
   * @remarks
   * Event ID list.
   */
  idList?: number[];
  /**
   * @remarks
   * Asset instance ID.
   * 
   * @example
   * i-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * Asset instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP.
   * 
   * @example
   * 101.132.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * File operation type. Values:
   * 
   * - **DELETE**: File deletion operation.
   * - **WRITE**: File write operation.
   * - **READ**: File read operation.
   * - **RENAME**: File rename operation.
   * - **CHOWN**: Set file owner and associated group operation.
   * 
   * @example
   * READ
   */
  operation?: string;
  /**
   * @remarks
   * The remarks.
   */
  remark?: string[];
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * Cross-page select all indicator. Values:
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  selectAllAcrossPages?: boolean;
  /**
   * @remarks
   * Start time timestamp.
   * 
   * @example
   * 1651290987000
   */
  startTime?: number;
  /**
   * @remarks
   * Server UUID.
   * 
   * @example
   * 5d55af3c-35f3-4d4d-8ccc-8c5443b0****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevels: 'AlertLevels',
      endTime: 'EndTime',
      id: 'Id',
      idList: 'IdList',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      operation: 'Operation',
      remark: 'Remark',
      ruleName: 'RuleName',
      selectAllAcrossPages: 'SelectAllAcrossPages',
      startTime: 'StartTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevels: { 'type': 'array', 'itemType': 'number' },
      endTime: 'number',
      id: 'number',
      idList: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      operation: 'string',
      remark: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      selectAllAcrossPages: 'boolean',
      startTime: 'number',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertLevels)) {
      $dara.Model.validateArray(this.alertLevels);
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

