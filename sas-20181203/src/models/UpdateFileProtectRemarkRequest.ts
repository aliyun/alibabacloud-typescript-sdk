// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectRemarkRequest extends $dara.Model {
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
   * 1649040221
   */
  endTime?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 1764
   */
  id?: number;
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
   * i-bp1g6wxdwps7s9dz****
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
   * 101.132.XX.XX
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
   * The type of operation performed on the file. Valid values:
   * 
   * - **DELETE**: Delete the file.
   * - **WRITE**: Write to the file.
   * - **READ**: Read the file.
   * - **RENAME**: Rename the file.
   * - **CHOWN**: Change the file owner and file group.
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
   * The rule name.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether to select all items across pages. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  selectAllAcrossPages?: boolean;
  /**
   * @remarks
   * The timestamp of the start time.
   * 
   * @example
   * 1651290987000
   */
  startTime?: number;
  /**
   * @remarks
   * The UUID of the server.
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

