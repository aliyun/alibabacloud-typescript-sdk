// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveScheduleMonitorRequestRemoveCommand extends $dara.Model {
  /**
   * @remarks
   * The ID of the monitored item.
   * 
   * This parameter is required.
   * 
   * @example
   * 6912345678901234
   */
  monitoredItemId?: number;
  /**
   * @remarks
   * The type of the monitored item. Valid values: LOGICAL_FIELD, OND_ID_NODE, SCHEDULE_PHYSICAL_NODE, MANUAL_PHYSICAL_NODE, ODM_NODE, LOGICAL_TABLE_NODE, and PROJECT.
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE_PHYSICAL_NODE
   */
  monitoredItemType?: string;
  static names(): { [key: string]: string } {
    return {
      monitoredItemId: 'MonitoredItemId',
      monitoredItemType: 'MonitoredItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitoredItemId: 'number',
      monitoredItemType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScheduleMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The request body for removing scheduling monitoring.
   * 
   * This parameter is required.
   */
  removeCommand?: RemoveScheduleMonitorRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      removeCommand: RemoveScheduleMonitorRequestRemoveCommand,
    };
  }

  validate() {
    if(this.removeCommand && typeof (this.removeCommand as any).validate === 'function') {
      (this.removeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

