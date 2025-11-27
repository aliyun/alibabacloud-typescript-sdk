// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint extends $dara.Model {
  /**
   * @example
   * 192.168.0.3
   */
  IP?: string;
  /**
   * @example
   * Public
   */
  netType?: string;
  /**
   * @example
   * 8080
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      netType: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponseBodyItemsApplicationsEndpoints extends $dara.Model {
  endpoint?: DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.endpoint)) {
      $dara.Model.validateArray(this.endpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponseBodyItemsApplications extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: string;
  /**
   * @example
   * pc-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @example
   * myapp
   */
  description?: string;
  endpoints?: DescribeApplicationsResponseBodyItemsApplicationsEndpoints;
  /**
   * @example
   * 1.0.0
   */
  engineVersion?: string;
  /**
   * @example
   * 2025-06-25T09:37:10Z
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  expired?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * pcs-**************
   */
  polarFSInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Activated
   */
  status?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      creationTime: 'CreationTime',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      endpoints: 'Endpoints',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      payType: 'PayType',
      polarFSInstanceId: 'PolarFSInstanceId',
      regionId: 'RegionId',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      creationTime: 'string',
      DBClusterId: 'string',
      description: 'string',
      endpoints: DescribeApplicationsResponseBodyItemsApplicationsEndpoints,
      engineVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      payType: 'string',
      polarFSInstanceId: 'string',
      regionId: 'string',
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponseBodyItems extends $dara.Model {
  applications?: DescribeApplicationsResponseBodyItemsApplications[];
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': DescribeApplicationsResponseBodyItemsApplications },
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationsResponseBody extends $dara.Model {
  items?: DescribeApplicationsResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeApplicationsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

