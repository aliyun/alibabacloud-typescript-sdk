// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks";
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions";


export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event can be handled.
   * 
   * @example
   * true
   */
  canAccept?: string;
  /**
   * @remarks
   * The code of the security violation.
   * 
   * @example
   * PR111
   */
  code?: string;
  /**
   * @remarks
   * The device name of the local disk.
   * 
   * @example
   * /dev/vda
   */
  device?: string;
  /**
   * @remarks
   * The ID of the local disk.
   * 
   * @example
   * d-diskid1
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * dh-bp1ewce1gk3iwv2****
   */
  hostId?: string;
  /**
   * @remarks
   * The type of the host. Valid values:
   * 
   * *   ddh: dedicated host
   * *   managehost: physical machine in a smart hosting pool
   * 
   * @example
   * ddh
   */
  hostType?: string;
  /**
   * @remarks
   * The inactive disks that were released and whose data must be cleared.
   */
  inactiveDisks?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks;
  /**
   * @remarks
   * The migration solution of the instance. Valid value: MigrationPlan. Instances can be migrated only by using migration plans.
   */
  migrationOptions?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions;
  /**
   * @remarks
   * The online repair policy for the damaged disk. Valid value: IsolateOnly, which indicates that damaged disks are isolated but not repaired.
   * 
   * @example
   * IsolateOnly
   */
  onlineRepairPolicy?: string;
  /**
   * @remarks
   * The illegal domain name.
   * 
   * @example
   * 1228.test.com
   */
  punishDomain?: string;
  /**
   * @remarks
   * The type of the penalty.
   * 
   * @example
   * ecs_message_alert
   */
  punishType?: string;
  /**
   * @remarks
   * The illegal URL.
   * 
   * @example
   * http://1228.test.com/1
   */
  punishUrl?: string;
  /**
   * @remarks
   * The rack number of the cloud box.
   * 
   * @example
   * A01
   */
  rack?: string;
  /**
   * @remarks
   * The response result of the event. Valid values:
   * 
   * *   true: The event was handled.
   * *   false: The event failed to be handled.
   * 
   * @example
   * true
   */
  responseResult?: string;
  static names(): { [key: string]: string } {
    return {
      canAccept: 'CanAccept',
      code: 'Code',
      device: 'Device',
      diskId: 'DiskId',
      hostId: 'HostId',
      hostType: 'HostType',
      inactiveDisks: 'InactiveDisks',
      migrationOptions: 'MigrationOptions',
      onlineRepairPolicy: 'OnlineRepairPolicy',
      punishDomain: 'PunishDomain',
      punishType: 'PunishType',
      punishUrl: 'PunishUrl',
      rack: 'Rack',
      responseResult: 'ResponseResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canAccept: 'string',
      code: 'string',
      device: 'string',
      diskId: 'string',
      hostId: 'string',
      hostType: 'string',
      inactiveDisks: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks,
      migrationOptions: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions,
      onlineRepairPolicy: 'string',
      punishDomain: 'string',
      punishType: 'string',
      punishUrl: 'string',
      rack: 'string',
      responseResult: 'string',
    };
  }

  validate() {
    if(this.inactiveDisks && typeof (this.inactiveDisks as any).validate === 'function') {
      (this.inactiveDisks as any).validate();
    }
    if(this.migrationOptions && typeof (this.migrationOptions as any).validate === 'function') {
      (this.migrationOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

