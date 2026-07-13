// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of access policies.
   * 
   * @example
   * 5
   */
  accessStrategyNum?: number;
  /**
   * @remarks
   * The number of address pools.
   * 
   * @example
   * 5
   */
  addressPoolNum?: number;
  /**
   * @remarks
   * The alert contact group.
   * 
   * @example
   * [\\"日常测试-研发组\\"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The CNAME access domain name.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**.dns-example.top
   */
  cname?: string;
  /**
   * @remarks
   * The CNAME access mode. Valid values:
   * 
   * - **SYSTEM_ASSIGN**: The system assigns a domain name.
   * 
   * - **CUSTOM**: You use a custom domain name.
   * 
   * @example
   * CUSTOM
   */
  cnameMode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2018-06-06T11:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance was created. This is a UNIX timestamp.
   * 
   * @example
   * 1528284856000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2018-06-06T11:34Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The expiration time of the instance. This is a UNIX timestamp.
   * 
   * @example
   * 1528284856000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The ID of the GTM instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The load balancing policy.
   * 
   * - **ALL_RR**: round-robin
   * 
   * - **RATIO**: weighted round-robin
   * 
   * @example
   * RATIO
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * E41AA251-F9BA-48C6-99B2-2B82B26A573A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-testgroupid
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The global TTL.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * dns-example.top
   */
  userDomainName?: string;
  /**
   * @remarks
   * The version code.
   * 
   * @example
   * biaozhun
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessStrategyNum: 'AccessStrategyNum',
      addressPoolNum: 'AddressPoolNum',
      alertGroup: 'AlertGroup',
      cname: 'Cname',
      cnameMode: 'CnameMode',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lbaStrategy: 'LbaStrategy',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      userDomainName: 'UserDomainName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessStrategyNum: 'number',
      addressPoolNum: 'number',
      alertGroup: 'string',
      cname: 'string',
      cnameMode: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      lbaStrategy: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      userDomainName: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

