// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds extends $dara.Model {
  cenId?: string[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cenId)) {
      $dara.Model.validateArray(this.cenId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit extends $dara.Model {
  bandwidthLimit?: string;
  geographicSpanId?: string;
  localRegionId?: string;
  oppositeRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      geographicSpanId: 'GeographicSpanId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'string',
      geographicSpanId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits extends $dara.Model {
  orginInterRegionBandwidthLimit?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit[];
  static names(): { [key: string]: string } {
    return {
      orginInterRegionBandwidthLimit: 'OrginInterRegionBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orginInterRegionBandwidthLimit: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit },
    };
  }

  validate() {
    if(Array.isArray(this.orginInterRegionBandwidthLimit)) {
      $dara.Model.validateArray(this.orginInterRegionBandwidthLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTags extends $dara.Model {
  tag?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage extends $dara.Model {
  bandwidth?: number;
  bandwidthPackageChargeType?: string;
  businessStatus?: string;
  cenBandwidthPackageId?: string;
  cenIds?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageCenIds;
  creationTime?: string;
  description?: string;
  expiredTime?: string;
  geographicRegionAId?: string;
  geographicRegionBId?: string;
  geographicSpanId?: string;
  hasReservationData?: string;
  isCrossBorder?: boolean;
  name?: string;
  orginInterRegionBandwidthLimits?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimits;
  reservationActiveTime?: string;
  reservationBandwidth?: string;
  reservationInternetChargeType?: string;
  reservationOrderType?: string;
  resourceGroupId?: string;
  status?: string;
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

export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages extends $dara.Model {
  cenBandwidthPackage?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackage: 'CenBandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackage: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackage },
    };
  }

  validate() {
    if(Array.isArray(this.cenBandwidthPackage)) {
      $dara.Model.validateArray(this.cenBandwidthPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenBandwidthPackagesResponseBody extends $dara.Model {
  cenBandwidthPackages?: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D7E2400-2755-4AF5-9B73-12565E4F73A0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackages: 'CenBandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackages: DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cenBandwidthPackages && typeof (this.cenBandwidthPackages as any).validate === 'function') {
      (this.cenBandwidthPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

