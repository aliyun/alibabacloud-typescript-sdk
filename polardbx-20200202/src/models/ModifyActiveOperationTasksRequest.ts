// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately execute the event. Valid values:
   * 
   * - 1: immediately executes the event.
   * - 0: executes the event at the specified time.
   * 
   * @example
   * 1
   */
  immediateStart?: number;
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
   * The time when the switchover starts. Specify the time in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2021-08-15T12:00:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      immediateStart: 'ImmediateStart',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      immediateStart: 'number',
      regionId: 'string',
      switchTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

