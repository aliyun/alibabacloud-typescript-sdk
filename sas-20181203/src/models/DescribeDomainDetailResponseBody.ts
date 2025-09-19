// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailResponseBodyDomainDetailItems extends $dara.Model {
  /**
   * @remarks
   * The type of the domain asset. Valid values:
   * 
   * *   **0**: an Elastic Compute Service (ECS) instance
   * *   **1**: a Server Load Balancer (SLB) instance
   * *   **2**: a Network Address Translation (NAT) gateway
   * *   **3**: an ApsaraDB RDS instance
   * *   **4**: an ApsaraDB for MongoDB instance
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-m5e6w7dzsktt6mz4***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * iZm5e6w7dzsktt6mz4yimeZ-6****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The instance UUID of the domain asset.
   * 
   * @example
   * lb-bp1g9dohoyin9cjhn6****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of alerts in your website assets.
   * 
   * @example
   * 2
   */
  alarmCount?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * An array that consists of the details about the domain asset.
   */
  domainDetailItems?: DescribeDomainDetailResponseBodyDomainDetailItems[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3A85CFCF-05C8-451A-9E41-C0D5E96BA407
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the root domain that corresponds to the domain.
   * 
   * @example
   * example.com
   */
  rootDomain?: string;
  /**
   * @remarks
   * The total number of vulnerabilities in your website assets.
   * 
   * @example
   * 2
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      domain: 'Domain',
      domainDetailItems: 'DomainDetailItems',
      requestId: 'RequestId',
      rootDomain: 'RootDomain',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      domain: 'string',
      domainDetailItems: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyDomainDetailItems },
      requestId: 'string',
      rootDomain: 'string',
      vulCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainDetailItems)) {
      $dara.Model.validateArray(this.domainDetailItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

