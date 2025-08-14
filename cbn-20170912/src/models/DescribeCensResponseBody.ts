// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCensResponseBodyCensCenCenBandwidthPackageIds extends $dara.Model {
  cenBandwidthPackageId?: string[];
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cenBandwidthPackageId)) {
      $dara.Model.validateArray(this.cenBandwidthPackageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCensCenTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagtest
   */
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

export class DescribeCensResponseBodyCensCenTags extends $dara.Model {
  tag?: DescribeCensResponseBodyCensCenTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensCenTagsTag },
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

export class DescribeCensResponseBodyCens extends $dara.Model {
  cen?: DescribeCensResponseBodyCensCen[];
  static names(): { [key: string]: string } {
    return {
      cen: 'Cen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cen: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensCen },
    };
  }

  validate() {
    if(Array.isArray(this.cen)) {
      $dara.Model.validateArray(this.cen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the CEN instance.
   */
  cens?: DescribeCensResponseBodyCens;
  /**
   * @remarks
   * The number of the page returned.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BFA6822-240E-4E27-B4C8-AA400EF7474D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cens: 'Cens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cens: DescribeCensResponseBodyCens,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cens && typeof (this.cens as any).validate === 'function') {
      (this.cens as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

