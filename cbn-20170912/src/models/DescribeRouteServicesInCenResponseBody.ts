// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs extends $dara.Model {
  cidr?: string[];
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cidr)) {
      $dara.Model.validateArray(this.cidr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the cloud service is accessed.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionId?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-pfa6ugf3xl0qsd****
   */
  cenId?: string;
  /**
   * @remarks
   * The service addresses of the cloud service.
   */
  cidrs?: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs;
  /**
   * @remarks
   * The description of the cloud service.
   * 
   * @example
   * descname
   */
  description?: string;
  /**
   * @remarks
   * The service address of the cloud service.
   * 
   * @example
   * 100.118.28.0/24
   */
  host?: string;
  /**
   * @remarks
   * The region ID of the cloud service.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC associated with the cloud service.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  hostVpcId?: string;
  /**
   * @remarks
   * The status of the cloud service. Valid values:
   * 
   * *   **Creating**
   * *   **Active**
   * *   **Deleting**
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      cidrs: 'Cidrs',
      description: 'Description',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      cidrs: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs,
      description: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.cidrs && typeof (this.cidrs as any).validate === 'function') {
      (this.cidrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBodyRouteServiceEntries extends $dara.Model {
  routeServiceEntry?: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry[];
  static names(): { [key: string]: string } {
    return {
      routeServiceEntry: 'RouteServiceEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeServiceEntry: { 'type': 'array', 'itemType': DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry },
    };
  }

  validate() {
    if(Array.isArray(this.routeServiceEntry)) {
      $dara.Model.validateArray(this.routeServiceEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteServicesInCenResponseBody extends $dara.Model {
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
   * The number of entries per page.
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
   * 196C99CA-6997-5951-9721-AE89720DF856
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the cloud services.
   */
  routeServiceEntries?: DescribeRouteServicesInCenResponseBodyRouteServiceEntries;
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeServiceEntries: 'RouteServiceEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeServiceEntries: DescribeRouteServicesInCenResponseBodyRouteServiceEntries,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routeServiceEntries && typeof (this.routeServiceEntries as any).validate === 'function') {
      (this.routeServiceEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

