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
  cenBandwidthPackageIds?: DescribeCensResponseBodyCensCenCenBandwidthPackageIds;
  cenId?: string;
  creationTime?: string;
  description?: string;
  ipv6Level?: string;
  name?: string;
  protectionLevel?: string;
  resourceGroupId?: string;
  status?: string;
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

