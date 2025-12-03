// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectRemarkRequest extends $dara.Model {
  alertLevels?: number[];
  endTime?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1764
   */
  id?: number;
  idList?: number[];
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  operation?: string;
  /**
   * @remarks
   * The remarks.
   */
  remark?: string[];
  ruleName?: string;
  selectAllAcrossPages?: boolean;
  startTime?: number;
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

