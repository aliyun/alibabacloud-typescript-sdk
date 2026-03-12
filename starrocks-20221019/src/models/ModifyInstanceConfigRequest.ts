// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceConfigDto } from "./InstanceConfigDto";


export class ModifyInstanceConfigRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  addConfigList?: string;
  /**
   * @example
   * [{\\"type\\":\\"sas_analysis_online-sas-operation-log-sh-sas-event-rasp\\",\\"configItemList\\":[{\\"key\\":\\"item_level\\",\\"valueList\\":[\\"all\\"]},{\\"key\\":\\"alert_type\\",\\"valueList\\":[\\"all\\"]}]}]
   */
  configList?: string;
  /**
   * @example
   * []
   */
  deleteConfigList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-991ca6180620****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  reason?: string;
  configsToAdd?: InstanceConfigDto[];
  configsToDelete?: InstanceConfigDto[];
  configsToUpdate?: InstanceConfigDto[];
  /**
   * @example
   * true
   */
  fastMode?: boolean;
  /**
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      addConfigList: 'AddConfigList',
      configList: 'ConfigList',
      deleteConfigList: 'DeleteConfigList',
      instanceId: 'InstanceId',
      reason: 'Reason',
      configsToAdd: 'configsToAdd',
      configsToDelete: 'configsToDelete',
      configsToUpdate: 'configsToUpdate',
      fastMode: 'fastMode',
      restart: 'restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addConfigList: 'string',
      configList: 'string',
      deleteConfigList: 'string',
      instanceId: 'string',
      reason: 'string',
      configsToAdd: { 'type': 'array', 'itemType': InstanceConfigDto },
      configsToDelete: { 'type': 'array', 'itemType': InstanceConfigDto },
      configsToUpdate: { 'type': 'array', 'itemType': InstanceConfigDto },
      fastMode: 'boolean',
      restart: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.configsToAdd)) {
      $dara.Model.validateArray(this.configsToAdd);
    }
    if(Array.isArray(this.configsToDelete)) {
      $dara.Model.validateArray(this.configsToDelete);
    }
    if(Array.isArray(this.configsToUpdate)) {
      $dara.Model.validateArray(this.configsToUpdate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

