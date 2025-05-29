// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCensResponseBodyCensCenCenBandwidthPackageIds } from "./DescribeCensResponseBodyCensCenCenBandwidthPackageIds";
import { DescribeCensResponseBodyCensCenTags } from "./DescribeCensResponseBodyCensCenTags";


export class DescribeCensResponseBodyCensCen extends $dara.Model {
  /**
   * @remarks
   * The IDs of the bandwidth plans that are associated with the CEN instance.
   */
  cenBandwidthPackageIds?: DescribeCensResponseBodyCensCenCenBandwidthPackageIds;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-0xyeagctz5sfg9****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the CEN instance was created.
   * 
   * The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-22T07:44Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the CEN instance.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled for the CEN instance.
   * 
   * *   **ENABLE**
   * *   **DISABLED**
   * 
   * @example
   * DISABLED
   */
  ipv6Level?: string;
  /**
   * @remarks
   * The CEN instance name.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The level of CIDR block overlapping.
   * 
   * **REDUCED**: Overlapped CIDR blocks are allowed. This value specifies that CIDR blocks can overlap but CIDR blocks cannot be duplicates.
   * 
   * @example
   * REDUCED
   */
  protectionLevel?: string;
  /**
   * @remarks
   * The ID of the resource group to which the CEN instance belongs.
   * 
   * @example
   * rg-acfm3unpnuw****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the CEN instance.
   * 
   * *   **Creating**
   * *   **Active**
   * *   **Deleting**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the tags that are added to the CEN instance.
   */
  tags?: DescribeCensResponseBodyCensCenTags;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageIds: 'CenBandwidthPackageIds',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      description: 'Description',
      ipv6Level: 'Ipv6Level',
      name: 'Name',
      protectionLevel: 'ProtectionLevel',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageIds: DescribeCensResponseBodyCensCenCenBandwidthPackageIds,
      cenId: 'string',
      creationTime: 'string',
      description: 'string',
      ipv6Level: 'string',
      name: 'string',
      protectionLevel: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeCensResponseBodyCensCenTags,
    };
  }

  validate() {
    if(this.cenBandwidthPackageIds && typeof (this.cenBandwidthPackageIds as any).validate === 'function') {
      (this.cenBandwidthPackageIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

