// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks";


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute extends $dara.Model {
  canAccept?: string;
  code?: string;
  device?: string;
  diskId?: string;
  hostId?: string;
  hostType?: string;
  inactiveDisks?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks[];
  migrationOptions?: string[];
  onlineRepairPolicy?: string;
  punishDomain?: string;
  punishType?: string;
  punishUrl?: string;
  rack?: string;
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

