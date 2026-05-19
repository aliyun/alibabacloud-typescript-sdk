// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectClientEventRequest extends $dara.Model {
  alertLevels?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1650470399999
   */
  endTime?: number;
  /**
   * @example
   * /etc/pam****
   */
  filePath?: string;
  /**
   * @example
   * i-bp1fu4aqltf1huhc****
   */
  instanceId?: string;
  /**
   * @example
   * ca_cpm_****
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
   * @example
   * READ
   */
  operation?: string;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * c:/windows/system32/i****
   */
  procPath?: string;
  /**
   * @example
   * text-001
   */
  ruleName?: string;
  /**
   * @example
   * 1650470399999
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  status?: string;
  /**
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevels: 'AlertLevels',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      operation: 'Operation',
      pageSize: 'PageSize',
      procPath: 'ProcPath',
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
      filePath: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      operation: 'string',
      pageSize: 'number',
      procPath: 'string',
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

