// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert notification levels.
   */
  alertLevels?: number[];
  /**
   * @remarks
   * The end timestamp of the query.
   * 
   * @example
   * 1649040221
   */
  endTime?: number;
  /**
   * @remarks
   * The list of event IDs.
   */
  id?: number[];
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
   * The type of operation performed on the file. Valid values:
   * 
   * - **DELETE**: Deletes a file.
   * - **WRITE**: Writes to a file.
   * - **READ**: Reads a file.
   * - **RENAME**: Renames a file.
   * - **CHOWN**: Changes the file owner and associated file group.
   * 
   * @example
   * READ
   */
  operation?: string;
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
   * Specifies whether to select all items across pages. Valid values:
   * - **true**: Selected.
   * - **false**: Not selected.
   */
  selectAllAcrossPages?: boolean;
  /**
   * @remarks
   * The start timestamp of the query.
   * 
   * @example
   * 1680919232000
   */
  startTime?: number;
  /**
   * @remarks
   * The event handling status.
   * - **0**: Unhandled
   * - **1**: Manually handled
   * - **2**: Added to whitelist
   * - **3**: Ignored
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server.
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

