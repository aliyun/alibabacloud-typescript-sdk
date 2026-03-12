// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceConfigDto } from "./InstanceConfigDto";


export class ModifyInstanceConfigPreCheckRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  configsToAdd?: InstanceConfigDto[];
  configsToDelete?: InstanceConfigDto[];
  configsToUpdate?: InstanceConfigDto[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      configsToAdd: 'configsToAdd',
      configsToDelete: 'configsToDelete',
      configsToUpdate: 'configsToUpdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      configsToAdd: { 'type': 'array', 'itemType': InstanceConfigDto },
      configsToDelete: { 'type': 'array', 'itemType': InstanceConfigDto },
      configsToUpdate: { 'type': 'array', 'itemType': InstanceConfigDto },
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

