// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of access policies of the GTM instance.
   * 
   * @example
   * 5
   */
  accessStrategyNum?: number;
  /**
   * @remarks
   * The number of address pools of the GTM instance.
   * 
   * @example
   * 5
   */
  addressPoolNum?: number;
  /**
   * @remarks
   * The alert group of the GTM instance.
   * 
   * @example
   * [\\\\"Daily test - R\\&D group\\\\"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The domain name of the GTM instance to which the service domain name is mapped by using a CNAME record.
   * 
   * @example
   * instance1.14.com
   */
  cname?: string;
  /**
   * @remarks
   * Indicates whether the CNAME is a custom domain name or is assigned by the system. Valid values:
   * 
   * *   **SYSTEM_ASSIGN**
   * *   **CUSTOM**
   * 
   * @example
   * SYSTEM_ASSIGN
   */
  cnameMode?: string;
  /**
   * @remarks
   * The time when the GTM instance was created.
   * 
   * @example
   * 2018-06-06T11:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the GTM instance was created.
   * 
   * @example
   * 1528284856000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the GTM instance expires.
   * 
   * @example
   * 2018-06-06T11:34Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the GTM instance expires.
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
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the GTM instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The load balancing policy. Valid values:
   * 
   * *   **ALL_RR**: round robin
   * *   **RATIO**: weighted round-robin
   * 
   * @example
   * RATIO
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The ID of the request.
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
   * The global time to live (TTL).
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The domain name of the application.
   * 
   * @example
   * www.example.com
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

