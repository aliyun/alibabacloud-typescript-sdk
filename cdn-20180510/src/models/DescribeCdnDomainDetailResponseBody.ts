// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * example.com
   */
  content?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * online
   */
  enabled?: string;
  /**
   * @remarks
   * The port over which requests are redirected to the origin server. Ports 443 and 80 are supported.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 20
   */
  priority?: string;
  /**
   * @remarks
   * The type of the origin server. Valid values:
   * 
   * *   **ipaddr**: an origin IP address
   * *   **domain**: an origin domain name
   * *   **oss**: the domain name of an Object Storage Service (OSS) bucket
   * *   **fc_domain:** a Function Compute domain name
   * 
   * @example
   * domain
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin server if multiple origin servers have been specified.
   * 
   * @example
   * 10
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      enabled: 'Enabled',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels extends $dara.Model {
  sourceModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel[];
  static names(): { [key: string]: string } {
    return {
      sourceModel: 'SourceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceModel: { 'type': 'array', 'itemType': DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel },
    };
  }

  validate() {
    if(Array.isArray(this.sourceModel)) {
      $dara.Model.validateArray(this.sourceModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModel extends $dara.Model {
  /**
   * @remarks
   * The workload type of the accelerated domain name. Valid values:
   * 
   * *   **web**: images and small files
   * *   **download**: large files
   * *   **video**: on-demand video and audio streaming
   * 
   * @example
   * web
   */
  cdnType?: string;
  /**
   * @remarks
   * The CNAME that is assigned to the accelerated domain name. You must add the CNAME record in the system of your DNS service provider to map the accelerated domain name to the CNAME.
   * 
   * @example
   * example.com.w.kunlunle.com
   */
  cname?: string;
  /**
   * @remarks
   * The description of the domain name.
   * 
   * @example
   * Streaming domain
   */
  description?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the accelerated domain name. Valid values:
   * 
   * *   **online**
   * *   **offline**
   * *   **configuring**
   * *   **configure_failed**
   * *   **checking**
   * *   **check_failed**
   * *   **stopping**
   * *   **deleting**
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the domain name was created.
   * 
   * @example
   * 2015-06-25T03:30:50Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the domain name was last modified.
   * 
   * @example
   * 2017-06-25T03:30:50Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The CNAME for which HTTPS is enabled.
   * 
   * @example
   * example.com.w.kunlunle.com
   */
  httpsCname?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * abcd1234abcd1234
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The acceleration region.
   * 
   * @example
   * domestic
   */
  scope?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  serverCertificateStatus?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sourceModels?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      httpsCname: 'HttpsCname',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      serverCertificateStatus: 'ServerCertificateStatus',
      sourceModels: 'SourceModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      httpsCname: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      serverCertificateStatus: 'string',
      sourceModels: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels,
    };
  }

  validate() {
    if(this.sourceModels && typeof (this.sourceModels as any).validate === 'function') {
      (this.sourceModels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the accelerated domain name.
   */
  getDomainDetailModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 18CF38AA-1275-451D-A12B-4EC0BF1C5E30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      getDomainDetailModel: 'GetDomainDetailModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getDomainDetailModel: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.getDomainDetailModel && typeof (this.getDomainDetailModel as any).validate === 'function') {
      (this.getDomainDetailModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

