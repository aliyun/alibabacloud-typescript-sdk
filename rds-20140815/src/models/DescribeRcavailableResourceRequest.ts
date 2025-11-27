// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCAvailableResourceRequest extends $dara.Model {
  cores?: number;
  dataDiskCategory?: string;
  dedicatedHostId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationResource?: string;
  instanceChargeType?: string;
  instanceType?: string;
  ioOptimized?: string;
  memory?: number;
  networkCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceType?: string;
  scope?: string;
  spotDuration?: number;
  spotStrategy?: string;
  systemDiskCategory?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      dataDiskCategory: 'DataDiskCategory',
      dedicatedHostId: 'DedicatedHostId',
      destinationResource: 'DestinationResource',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      memory: 'Memory',
      networkCategory: 'NetworkCategory',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      spotDuration: 'SpotDuration',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      dataDiskCategory: 'string',
      dedicatedHostId: 'string',
      destinationResource: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      ioOptimized: 'string',
      memory: 'number',
      networkCategory: 'string',
      regionId: 'string',
      resourceType: 'string',
      scope: 'string',
      spotDuration: 'number',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

