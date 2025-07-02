// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiskInfo } from "./DiskInfo";
import { SystemDiskParam } from "./SystemDiskParam";


export class NodeGroupParam extends $dara.Model {
  autoPayOrder?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoRenewDurationUnit?: string;
  dataDisks?: DiskInfo[];
  description?: string;
  instanceTypes?: string[];
  nodeCount?: number;
  nodeGroupIndex?: number;
  nodeGroupName?: string;
  nodeGroupType?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  paymentType?: string;
  systemDisk?: SystemDiskParam;
  vSwitchIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPayOrder: 'AutoPayOrder',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      dataDisks: 'DataDisks',
      description: 'Description',
      instanceTypes: 'InstanceTypes',
      nodeCount: 'NodeCount',
      nodeGroupIndex: 'NodeGroupIndex',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPayOrder: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      dataDisks: { 'type': 'array', 'itemType': DiskInfo },
      description: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeCount: 'number',
      nodeGroupIndex: 'number',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      systemDisk: SystemDiskParam,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

