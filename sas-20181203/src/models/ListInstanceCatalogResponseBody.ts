// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceCatalogResponseBodyVendorsInstanceTypesInstanceSubTypes extends $dara.Model {
  /**
   * @remarks
   * The name of the asset subtype.
   * 
   * @example
   * SECURITY_GROUP
   */
  name?: string;
  /**
   * @remarks
   * The ID of the asset subtype.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceCatalogResponseBodyVendorsInstanceTypes extends $dara.Model {
  /**
   * @remarks
   * The asset subtypes.
   */
  instanceSubTypes?: ListInstanceCatalogResponseBodyVendorsInstanceTypesInstanceSubTypes[];
  /**
   * @remarks
   * The name of the asset type.
   * 
   * @example
   * ECS
   */
  name?: string;
  /**
   * @remarks
   * The ID of the asset type. Valid values:
   * 
   * *   **0**: Elastic Compute Service (ECS)
   * *   **1**: Server Load Balancer (SLB)
   * *   **3**: ApsaraDB RDS
   * *   **4**: ApsaraDB for MongoDB (MongoDB)
   * *   **5**: Tair (Redis OSS-compatible)
   * *   **6**: Container Registry
   * *   **8**: Container Service for Kubernetes (ACK)
   * *   **9**: Virtual Private Cloud (VPC)
   * *   **11**: ActionTrail
   * *   **12**: Alibaba Cloud CDN (CDN)
   * *   **13**: Certificate Management Service (formerly SSL Certificates Service)
   * *   **14**: Alibaba Cloud DevOps
   * *   **15**: Resource Access Management (RAM)
   * *   **16**: Anti-DDoS
   * *   **17**: Web Application Firewall (WAF)
   * *   **18**: Object Storage Service (OSS)
   * *   **19**: PolarDB
   * *   **20**: ApsaraDB RDS for PostgreSQL
   * *   **21**: Microservices Engine (MSE)
   * *   **22**: Apsara File Storage NAS (NAS)
   * *   **23**: Data Security Center (DSC)
   * *   **24**: Elastic IP Address (EIP)
   * *   **25**: Identity as a Service (IDaaS) - Enterprise Identity Access Management (EIAM)
   * *   **26**: PolarDB for Xscale (PolarDB-X)
   * *   **27**: Elasticsearch
   * 
   * @example
   * 15
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      instanceSubTypes: 'InstanceSubTypes',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSubTypes: { 'type': 'array', 'itemType': ListInstanceCatalogResponseBodyVendorsInstanceTypesInstanceSubTypes },
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSubTypes)) {
      $dara.Model.validateArray(this.instanceSubTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceCatalogResponseBodyVendors extends $dara.Model {
  /**
   * @remarks
   * The asset types.
   */
  instanceTypes?: ListInstanceCatalogResponseBodyVendorsInstanceTypes[];
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * ALIYUN
   */
  name?: string;
  /**
   * @remarks
   * The ID of the service provider type. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud
   * *   **1**: an asset outside Alibaba Cloud
   * *   **2**: an asset in a data center
   * *   **3**, **4**, **5**, and **7**: an asset from a third-party cloud service provider
   * *   **8**: a lightweight cloud asset
   * 
   * @example
   * 0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': ListInstanceCatalogResponseBodyVendorsInstanceTypes },
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceCatalogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0D42A83F-CE33-5F54-A5AE-05DA39F59E1B
   */
  requestId?: string;
  /**
   * @remarks
   * The asset types by service provider.
   */
  vendors?: ListInstanceCatalogResponseBodyVendors[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vendors: { 'type': 'array', 'itemType': ListInstanceCatalogResponseBodyVendors },
    };
  }

  validate() {
    if(Array.isArray(this.vendors)) {
      $dara.Model.validateArray(this.vendors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

