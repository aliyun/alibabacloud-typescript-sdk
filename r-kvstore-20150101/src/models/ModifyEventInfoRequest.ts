// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters related to the action in JSON format.
   * When **TaskAction** is set to **modifySwitchTime**, set this parameter to `{"recoverMode": "xxx", "recoverTime": "xxx"}`.
   * * **recoverMode**: the task recovery mode. Valid values:
   *   * **imePoint**: executes the task at a specified point in time.
   *   * **immediate**: executes the task immediately.
   *   * **maintainTime**: executes the task during the O&M window.
   * * **recoverTime**: the specified point in time in UTC. The format is yyyy-MM-ddTHH:mm:ssZ. This parameter is required when **recoverMode** is set to **timePoint**.
   * 
   * @example
   * {"recoverTime":"2023-04-17T14:02:35Z","recoverMode":"timePoint"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The action to process the event. Valid values:
   * - **archive**: Archives the event.
   * - **undo**: Does not process the event.
   * 
   * @example
   * archive
   */
  eventAction?: string;
  /**
   * @remarks
   * The event IDs. Separate multiple IDs with commas. A maximum of 20 IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 5422964
   */
  eventId?: string;
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
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionParams: 'ActionParams',
      eventAction: 'EventAction',
      eventId: 'EventId',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionParams: 'string',
      eventAction: 'string',
      eventId: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

