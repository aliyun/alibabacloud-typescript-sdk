// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks";


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute extends $dara.Model {
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
   * rcd-****
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
   * *   **ddh**: dedicated host
   * *   **managehost**: physical machine in a smart hosting pool
   * 
   * @example
   * ddh
   */
  hostType?: string;
  /**
   * @remarks
   * The inactive disks that have been released and whose data must be cleared.
   */
  inactiveDisks?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks[];
  /**
   * @remarks
   * The migration solutions of the instance.
   */
  migrationOptions?: string[];
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
   * *   **true**: the event was handled.
   * *   **false**: the event failed to be handled.
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
      inactiveDisks: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks },
      migrationOptions: { 'type': 'array', 'itemType': 'string' },
      onlineRepairPolicy: 'string',
      punishDomain: 'string',
      punishType: 'string',
      punishUrl: 'string',
      rack: 'string',
      responseResult: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inactiveDisks)) {
      $dara.Model.validateArray(this.inactiveDisks);
    }
    if(Array.isArray(this.migrationOptions)) {
      $dara.Model.validateArray(this.migrationOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

