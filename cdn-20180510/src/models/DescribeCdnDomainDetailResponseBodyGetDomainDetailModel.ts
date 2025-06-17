// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels } from "./DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels";


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

