// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateApplicationRequestAlarmConfig } from "./UpdateApplicationRequestAlarmConfig";


export class UpdateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfig?: UpdateApplicationRequestAlarmConfig;
  /**
   * @remarks
   * Specifies whether to delete existing alert rules before applying the alert template. Default value: false.
   * 
   * @example
   * false
   */
  deleteAlarmRulesBeforeUpdate?: boolean;
  /**
   * @remarks
   * The description to be updated for the application.
   * 
   * @example
   * test application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * My-Application
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      deleteAlarmRulesBeforeUpdate: 'DeleteAlarmRulesBeforeUpdate',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: UpdateApplicationRequestAlarmConfig,
      deleteAlarmRulesBeforeUpdate: 'boolean',
      description: 'string',
      name: 'string',
      regionId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.alarmConfig && typeof (this.alarmConfig as any).validate === 'function') {
      (this.alarmConfig as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

