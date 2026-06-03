// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemAlarmsRequest extends $dara.Model {
  /**
   * @example
   * 17
   */
  alarmType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-06-06 00:00:00
   */
  beginDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-06-06 23:59:59
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmType: 'AlarmType',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmType: 'number',
      beginDate: 'string',
      endDate: 'string',
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

