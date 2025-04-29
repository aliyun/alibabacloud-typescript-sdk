// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories } from "./DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories";
import { DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations } from "./DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations";
import { DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies } from "./DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies";
import { DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes } from "./DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes";
import { DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes } from "./DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes";
import { DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories } from "./DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories";


export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo extends $dara.Model {
  /**
   * @remarks
   * The categories of data disks that can be created.
   */
  dataDiskCategories?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories;
  /**
   * @remarks
   * The supported generations of instance families.
   */
  instanceGenerations?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations;
  /**
   * @remarks
   * The supported instance families.
   */
  instanceTypeFamilies?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies;
  /**
   * @remarks
   * The supported instance types.
   */
  instanceTypes?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes;
  /**
   * @remarks
   * Indicates whether the instance is I/O optimized.
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * The supported network types.
   */
  networkTypes?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes;
  /**
   * @remarks
   * The categories of system disks that can be created.
   */
  systemDiskCategories?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategories: 'DataDiskCategories',
      instanceGenerations: 'InstanceGenerations',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      instanceTypes: 'InstanceTypes',
      ioOptimized: 'IoOptimized',
      networkTypes: 'NetworkTypes',
      systemDiskCategories: 'SystemDiskCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategories: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories,
      instanceGenerations: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations,
      instanceTypeFamilies: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies,
      instanceTypes: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes,
      ioOptimized: 'boolean',
      networkTypes: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes,
      systemDiskCategories: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories,
    };
  }

  validate() {
    if(this.dataDiskCategories && typeof (this.dataDiskCategories as any).validate === 'function') {
      (this.dataDiskCategories as any).validate();
    }
    if(this.instanceGenerations && typeof (this.instanceGenerations as any).validate === 'function') {
      (this.instanceGenerations as any).validate();
    }
    if(this.instanceTypeFamilies && typeof (this.instanceTypeFamilies as any).validate === 'function') {
      (this.instanceTypeFamilies as any).validate();
    }
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    if(this.networkTypes && typeof (this.networkTypes as any).validate === 'function') {
      (this.networkTypes as any).validate();
    }
    if(this.systemDiskCategories && typeof (this.systemDiskCategories as any).validate === 'function') {
      (this.systemDiskCategories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

