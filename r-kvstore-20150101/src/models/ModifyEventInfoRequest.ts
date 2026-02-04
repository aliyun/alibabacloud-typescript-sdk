// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON-formatted parameters related to the action. Set this parameter to `{"recoverMode": "xxx", "recoverTime": "xxx"}` if the **TaskAction** parameter is set to **modifySwitchTime**.
   * 
   * *   **recoverMode**: specifies the restoration mode for the task. Valid values:
   * 
   *     *   **timePoint**: performs the task at the specified point in time.
   *     *   **immediate**: performs the task immediately.
   *     *   **maintainTime**: performs the task within the maintenance window.
   * 
   * *   **recoverTime**: specifies the point in time for restoration. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. This parameter is required if the **recoverMode** parameter is set to **timePoint**.
   * 
   * @example
   * {"recoverTime":"2023-04-17T14:02:35Z","recoverMode":"timePoint"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The event handling action. Valid values:
   * 
   * *   **archive**
   * *   **undo**
   * 
   * @example
   * archive
   */
  eventAction?: string;
  /**
   * @remarks
   * The event IDs. Separate multiple event IDs with commas (,). You can specify up to 20 event IDs.
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

