// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfRequest extends $dara.Model {
  /**
   * @remarks
   * The day of the week. Valid values: 1 to 7.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2,3,4,5,6,7
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle mode. Set this parameter to Week.
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 02:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 02:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration. Valid values:
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      regionId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

