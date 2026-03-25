// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo extends $dara.Model {
  accessRegionId?: string;
  hostRegionId?: string;
  hostVpcId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos extends $dara.Model {
  privateZoneInfo?: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      privateZoneInfo: 'PrivateZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateZoneInfo: { 'type': 'array', 'itemType': DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfosPrivateZoneInfo },
    };
  }

  validate() {
    if(Array.isArray(this.privateZoneInfo)) {
      $dara.Model.validateArray(this.privateZoneInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenPrivateZoneRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The page number of the returned page.
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
   * The IP address of the DNS server used by PrivateZone.
   * 
   * @example
   * 100.100.XX.XX/32,100.100.XX.XX/32
   */
  privateZoneDnsServers?: string;
  privateZoneInfos?: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 461EC1B5-04A8-4706-8764-8F5BCEF48A6F
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
      cenId: 'CenId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateZoneDnsServers: 'PrivateZoneDnsServers',
      privateZoneInfos: 'PrivateZoneInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateZoneDnsServers: 'string',
      privateZoneInfos: DescribeCenPrivateZoneRoutesResponseBodyPrivateZoneInfos,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.privateZoneInfos && typeof (this.privateZoneInfos as any).validate === 'function') {
      (this.privateZoneInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

