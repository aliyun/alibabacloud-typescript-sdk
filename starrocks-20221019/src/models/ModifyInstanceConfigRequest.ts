// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceConfigDto } from "./InstanceConfigDto";


export class ModifyInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * [Deprecated] List of configurations to add
   * 
   * @example
   * []
   */
  addConfigList?: string;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * [{\\"type\\":\\"sas_analysis_online-sas-operation-log-sh-sas-event-rasp\\",\\"configItemList\\":[{\\"key\\":\\"item_level\\",\\"valueList\\":[\\"all\\"]},{\\"key\\":\\"alert_type\\",\\"valueList\\":[\\"all\\"]}]}]
   */
  configList?: string;
  /**
   * @remarks
   * [Deprecated] List of configurations to delete
   * 
   * @example
   * []
   */
  deleteConfigList?: string;
  /**
   * @remarks
   * Sample ID
   * 
   * This parameter is required.
   * 
   * @example
   * c-991ca6180620****
   */
  instanceId?: string;
  /**
   * @remarks
   * Reason for modification
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Configurations to add
   */
  configsToAdd?: InstanceConfigDto[];
  /**
   * @remarks
   * Configurations to delete
   */
  configsToDelete?: InstanceConfigDto[];
  /**
   * @remarks
   * Configurations to update
   */
  configsToUpdate?: InstanceConfigDto[];
  /**
   * @remarks
   * Whether to restart quickly
   * 
   * @example
   * true
   */
  fastMode?: boolean;
  /**
   * @remarks
   * Whether to restart.
   * 
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

