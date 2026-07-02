// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters for the action, in JSON format. For example: `{"recoverMode": "xxx", "recoverTime": "xxx"}`.
   * 
   * - **recoverMode**: The recovery mode. Valid values:
   * 
   *   - **timePoint**: Executes the task at the time specified by `recoverTime`.
   * 
   *   - **immediate**: Executes the task immediately.
   * 
   *   - **maintainTime**: Executes the task during the maintenance window.
   * 
   * - **recoverTime**: The time to execute the task. This parameter is required when **recoverMode** is set to **timePoint**. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * {"recoverTime":"2023-04-17T14:02:35Z","recoverMode":"timePoint"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The action to perform on the event. Valid values:
   * 
   * - **archive**: Archives the event.
   * 
   * - **undo**: Cancels processing for the event.
   * 
   * @example
   * archive
   */
  eventAction?: string;
  /**
   * @remarks
   * The ID of the event. You can specify up to 20 event IDs. Separate multiple IDs with commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 5422964
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the region.
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

