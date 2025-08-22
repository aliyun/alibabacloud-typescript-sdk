// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainsBySourceResponseBodyDomainInfoDomainList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-08-21T03:05:20+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The CNAME record assigned to the domain name.
   * 
   * @example
   * example.org.alikunlun.com
   */
  domainCname?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.org
   */
  domainName?: string;
  /**
   * @remarks
   * The workload type of the accelerated domain name. Valid value:
   * 
   * *   **ipa**: layer 4 acceleration
   * *   **dynamic**: layer 7 acceleration
   * 
   * @example
   * dynamic
   */
  domainType?: string;
  /**
   * @remarks
   * The status of the domain name. Valid value:
   * 
   * *   **applying**: The domain name is under review.
   * *   **configuring**: The domain name is being configured.
   * *   **online**: The domain name is working as expected.
   * *   **stopping**: The domain name is being stopped.
   * *   **offline**: The domain name is disabled.
   * *   **disabling**: The domain name is being removed.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The time when the domain name was updated.
   * 
   * @example
   * 2022-12-01T03:26:55+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainCname: 'DomainCname',
      domainName: 'DomainName',
      domainType: 'DomainType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainCname: 'string',
      domainName: 'string',
      domainType: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainsBySourceResponseBodyDomainInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the domain names.
   */
  domainList?: DescribeDcdnDomainsBySourceResponseBodyDomainInfoDomainList[];
  /**
   * @remarks
   * The origin server.
   * 
   * @example
   * example.com
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': DescribeDcdnDomainsBySourceResponseBodyDomainInfoDomainList },
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainsBySourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about each origin server and the corresponding domain names.
   * 
   * This parameter is required.
   */
  domainInfo?: DescribeDcdnDomainsBySourceResponseBodyDomainInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': DescribeDcdnDomainsBySourceResponseBodyDomainInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainInfo)) {
      $dara.Model.validateArray(this.domainInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

