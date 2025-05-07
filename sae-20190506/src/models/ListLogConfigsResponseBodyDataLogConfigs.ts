// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogConfigsResponseBodyDataLogConfigs extends $dara.Model {
  /**
   * @remarks
   * The path of logs.
   * 
   * @example
   * sae-1f240907a6faf58c653f09e81b7e****
   */
  configName?: string;
  /**
   * @remarks
   * The storage type of logs.
   * 
   * @example
   * 2019-08-29 17:18:00
   */
  createTime?: string;
  /**
   * @remarks
   * The path of the log file (log source).
   * 
   * @example
   * /root/logs/hsf/hsf.log
   */
  logDir?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * file_log
   */
  logType?: string;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * sae-1f240907a6faf58c653f09e81b7e****
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The type of the log. Set this value to **file_log**.
   * 
   * @example
   * sae-56f77b65-788d-442a-9885-7f20d91f****
   */
  slsProject?: string;
  /**
   * @remarks
   * The ID of the Log Service project.
   * 
   * @example
   * sls
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      createTime: 'CreateTime',
      logDir: 'LogDir',
      logType: 'LogType',
      regionId: 'RegionId',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
      storeType: 'StoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      createTime: 'string',
      logDir: 'string',
      logType: 'string',
      regionId: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
      storeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

