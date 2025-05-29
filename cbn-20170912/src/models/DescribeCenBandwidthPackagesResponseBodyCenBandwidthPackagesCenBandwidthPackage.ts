// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds } from "./DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds";
import { DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits } from "./DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits";
import { DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags } from "./DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags";


export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the bandwidth plan.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the bandwidth plan.
   * 
   * @example
   * PREPAY
   */
  bandwidthPackageChargeType?: string;
  /**
   * @remarks
   * The status of the bandwidth plan. Valid values:
   * 
   * *   **Normal**: running as expected.
   * *   **FinancialLocked**: locked due to overdue payments.
   * *   **SecurityLocked**: locked due to security reasons
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * cenbwp-4c2zaavbvh5x****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * A list of CEN instances that are associated with the bandwidth plan.
   */
  cenIds?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds;
  /**
   * @remarks
   * The time when the bandwidth plan was created. The time is displayed in the ISO8601 standard in the YYYY-MM-DDThh:mmZ format.
   * 
   * @example
   * 2021-02-01T11:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the bandwidth plan.
   * 
   * @example
   * cen
   */
  description?: string;
  /**
   * @remarks
   * The time when the bandwidth plan expires.
   * 
   * @example
   * 2021-09-08T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the area that you want to query. Valid values:
   * 
   * *   **china**: Chinese mainland.
   * *   **asia-pacific**: Asia Pacific
   * *   **europe**: Europe
   * *   **north-america**: North America
   * 
   * @example
   * china
   */
  geographicRegionAId?: string;
  /**
   * @remarks
   * The ID of the other area connected by the bandwidth plan. Valid values:
   * 
   * *   **china**: Chinese mainland.
   * *   **asia-pacific**: Asia Pacific
   * *   **europe**: Europe
   * *   **north-america**: North America
   * 
   * @example
   * north-america
   */
  geographicRegionBId?: string;
  /**
   * @remarks
   * The ID of the connected area.
   * 
   * @example
   * north-america_china
   */
  geographicSpanId?: string;
  /**
   * @remarks
   * Indicates whether renewal data is included.
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter returns **true** only when the **IncludeReservationData** parameter is set to **true** and a pending order exists.
   * 
   * @example
   * false
   */
  hasReservationData?: string;
  /**
   * @remarks
   * Indicates whether the bandwidth plan supports cross-border communication.
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  isCrossBorder?: boolean;
  /**
   * @remarks
   * The name of the bandwidth plan.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The details about the connected regions.
   */
  orginInterRegionBandwidthLimits?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits;
  /**
   * @remarks
   * The expiration time of the temporary upgrade.
   * 
   * @example
   * 2021-08-30T16:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The bandwidth value to which the bandwidth plan is restored when the temporary upgrade ends.
   * 
   * @example
   * 10
   */
  reservationBandwidth?: string;
  /**
   * @remarks
   * The new billing method.
   * 
   * @example
   * PREPAY
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The renewal method.
   * 
   * *   **TEMP_UPGRADE**: temporary upgrade
   * *   **UPGRADE**: upgrade
   * 
   * @example
   * UPGRADE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ACL belongs.
   * 
   * @example
   * rg-aekzoyr5k36****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the bandwidth plan is associated with a CEN instance.
   * 
   * *   **Idle**
   * *   **InUse**
   * 
   * @example
   * InUse
   */
  status?: string;
  /**
   * @remarks
   * The tags of the bandwidth plan.
   */
  tags?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthPackageChargeType: 'BandwidthPackageChargeType',
      businessStatus: 'BusinessStatus',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenIds: 'CenIds',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      geographicRegionAId: 'GeographicRegionAId',
      geographicRegionBId: 'GeographicRegionBId',
      geographicSpanId: 'GeographicSpanId',
      hasReservationData: 'HasReservationData',
      isCrossBorder: 'IsCrossBorder',
      name: 'Name',
      orginInterRegionBandwidthLimits: 'OrginInterRegionBandwidthLimits',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bandwidthPackageChargeType: 'string',
      businessStatus: 'string',
      cenBandwidthPackageId: 'string',
      cenIds: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds,
      creationTime: 'string',
      description: 'string',
      expiredTime: 'string',
      geographicRegionAId: 'string',
      geographicRegionBId: 'string',
      geographicSpanId: 'string',
      hasReservationData: 'string',
      isCrossBorder: 'boolean',
      name: 'string',
      orginInterRegionBandwidthLimits: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits,
      reservationActiveTime: 'string',
      reservationBandwidth: 'string',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags,
    };
  }

  validate() {
    if(this.cenIds && typeof (this.cenIds as any).validate === 'function') {
      (this.cenIds as any).validate();
    }
    if(this.orginInterRegionBandwidthLimits && typeof (this.orginInterRegionBandwidthLimits as any).validate === 'function') {
      (this.orginInterRegionBandwidthLimits as any).validate();
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

