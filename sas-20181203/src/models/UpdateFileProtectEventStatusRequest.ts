// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectEventStatusRequest extends $dara.Model {
  alertLevels?: number[];
  endTime?: number;
  /**
   * @remarks
   * The IDs of the events.
   */
  id?: number[];
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  operation?: string;
  ruleName?: string;
  selectAllAcrossPages?: boolean;
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

