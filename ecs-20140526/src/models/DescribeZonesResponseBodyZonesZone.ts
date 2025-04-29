// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes } from "./DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes";
import { DescribeZonesResponseBodyZonesZoneAvailableDiskCategories } from "./DescribeZonesResponseBodyZonesZoneAvailableDiskCategories";
import { DescribeZonesResponseBodyZonesZoneAvailableInstanceTypes } from "./DescribeZonesResponseBodyZonesZoneAvailableInstanceTypes";
import { DescribeZonesResponseBodyZonesZoneAvailableResourceCreation } from "./DescribeZonesResponseBodyZonesZoneAvailableResourceCreation";
import { DescribeZonesResponseBodyZonesZoneAvailableResources } from "./DescribeZonesResponseBodyZonesZoneAvailableResources";
import { DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories } from "./DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories";
import { DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations } from "./DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations";


export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * The supported dedicated host types.
   */
  availableDedicatedHostTypes?: DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes;
  /**
   * @remarks
   * The categories of cloud disks that can be created. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_ssd: standard SSD
   * *   cloud_efficiency: ultra disk
   * *   cloud_essd: ESSD
   */
  availableDiskCategories?: DescribeZonesResponseBodyZonesZoneAvailableDiskCategories;
  /**
   * @remarks
   * The supported instance types.
   */
  availableInstanceTypes?: DescribeZonesResponseBodyZonesZoneAvailableInstanceTypes;
  /**
   * @remarks
   * The types of resources that can be created. Valid values:
   * 
   * *   VSwitch: vSwitch
   * *   IoOptimized: I/O optimized instance
   * *   Instance: instance
   * *   DedicatedHost: dedicated host
   * *   disk: cloud disk
   */
  availableResourceCreation?: DescribeZonesResponseBodyZonesZoneAvailableResourceCreation;
  /**
   * @remarks
   * Details about the resources that can be created in the zone.
   */
  availableResources?: DescribeZonesResponseBodyZonesZoneAvailableResources;
  /**
   * @remarks
   * The supported Shared Block Storage device categories.
   */
  availableVolumeCategories?: DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories;
  /**
   * @remarks
   * The supported generations of dedicated hosts.
   */
  dedicatedHostGenerations?: DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations;
  /**
   * @remarks
   * The name of the zone in the local language.
   * 
   * @example
   * Hangzhou Zone G
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  /**
   * @remarks
   * The type of the zone. Valid values:
   * 
   * *   AvailabilityZone: zone for the Alibaba Cloud public cloud
   * *   CloudBoxZone: zone for CloudBox
   * 
   * @example
   * AvailabilityZone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      availableDedicatedHostTypes: 'AvailableDedicatedHostTypes',
      availableDiskCategories: 'AvailableDiskCategories',
      availableInstanceTypes: 'AvailableInstanceTypes',
      availableResourceCreation: 'AvailableResourceCreation',
      availableResources: 'AvailableResources',
      availableVolumeCategories: 'AvailableVolumeCategories',
      dedicatedHostGenerations: 'DedicatedHostGenerations',
      localName: 'LocalName',
      zoneId: 'ZoneId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDedicatedHostTypes: DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes,
      availableDiskCategories: DescribeZonesResponseBodyZonesZoneAvailableDiskCategories,
      availableInstanceTypes: DescribeZonesResponseBodyZonesZoneAvailableInstanceTypes,
      availableResourceCreation: DescribeZonesResponseBodyZonesZoneAvailableResourceCreation,
      availableResources: DescribeZonesResponseBodyZonesZoneAvailableResources,
      availableVolumeCategories: DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories,
      dedicatedHostGenerations: DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations,
      localName: 'string',
      zoneId: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(this.availableDedicatedHostTypes && typeof (this.availableDedicatedHostTypes as any).validate === 'function') {
      (this.availableDedicatedHostTypes as any).validate();
    }
    if(this.availableDiskCategories && typeof (this.availableDiskCategories as any).validate === 'function') {
      (this.availableDiskCategories as any).validate();
    }
    if(this.availableInstanceTypes && typeof (this.availableInstanceTypes as any).validate === 'function') {
      (this.availableInstanceTypes as any).validate();
    }
    if(this.availableResourceCreation && typeof (this.availableResourceCreation as any).validate === 'function') {
      (this.availableResourceCreation as any).validate();
    }
    if(this.availableResources && typeof (this.availableResources as any).validate === 'function') {
      (this.availableResources as any).validate();
    }
    if(this.availableVolumeCategories && typeof (this.availableVolumeCategories as any).validate === 'function') {
      (this.availableVolumeCategories as any).validate();
    }
    if(this.dedicatedHostGenerations && typeof (this.dedicatedHostGenerations as any).validate === 'function') {
      (this.dedicatedHostGenerations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

