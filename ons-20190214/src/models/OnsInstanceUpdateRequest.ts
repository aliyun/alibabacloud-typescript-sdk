// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsInstanceUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance whose name or description you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the instance. The name must meet the following rules:
   * 
   * *   The name of the instance must be unique in the region where the instance is deployed.
   * *   The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), underscores (_), and Chinese characters.
   * *   If you do not configure this parameter, the instance name remains unchanged.
   * 
   * @example
   * Updatedname
   */
  instanceName?: string;
  /**
   * @remarks
   * The updated description of the instance. If you do not configure this parameter, the instance description remains unchanged.
   * 
   * @example
   * Updateddescription
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

