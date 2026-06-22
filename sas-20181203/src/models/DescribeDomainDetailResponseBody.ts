// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailResponseBodyDomainDetailItems extends $dara.Model {
  /**
   * @remarks
   * The Asset Type of the asset under the domain name. Valid values:
   * 
   * - **0**: ECS
   * - **1**: load balancing
   * - **2**: NAT gateway
   * - **3**: RDS database
   * - **4**: MongoDB database
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
   * The UUID of the asset instance.
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
   * The asset information related to the domain name.
   */
  domainDetailItems?: DescribeDomainDetailResponseBodyDomainDetailItems[];
  /**
   * @remarks
   * The request ID. The China value is a unique identifier that Alibaba Cloud generates for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 3A85CFCF-05C8-451A-9E41-C0D5E96BA407
   */
  requestId?: string;
  /**
   * @remarks
   * The root domain name that corresponds to the domain name.
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

