// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters related to the action. You can add extensions based on your business requirements. When the taskAction parameter is set to modifySwitchTime, set the ActionParams parameter to `{"recoverMode": "xxx", "recoverTime": "xxx"}`.
   * 
   * The recoverMode parameter specifies the task recovery pattern. Valid values:
   * - **timePoint**: Executes the task at a specified point in time.
   * - **immediate**: Executes the task immediately.
   * 
   * The recoverTime parameter specifies the recovery time. The time must be in UTC+0 and in the yyyy-MM-ddTHH:mm:ssZ format. When the recoverMode parameter is set to timePoint, the recoverTime parameter is required.
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
   * > This parameter is required.
   * 
   * @example
   * archive
   */
  eventAction?: string;
  /**
   * @remarks
   * The event IDs. You can call the DescribeEvents operation to query the event IDs. Separate multiple event IDs with commas (,). You can specify up to 20 event IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 5422964
   */
  eventId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
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

