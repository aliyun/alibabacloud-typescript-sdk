// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfigShrink?: string;
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
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigShrink: 'AlarmConfig',
      deleteAlarmRulesBeforeUpdate: 'DeleteAlarmRulesBeforeUpdate',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigShrink: 'string',
      deleteAlarmRulesBeforeUpdate: 'boolean',
      description: 'string',
      name: 'string',
      regionId: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

