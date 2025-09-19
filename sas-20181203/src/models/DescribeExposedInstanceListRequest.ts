// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **0**: an Elastic Compute Service (ECS) instance.
   * *   **3**: an ApsaraDB RDS instance.
   * *   **4**: an ApsaraDB for MongoDB instance.
   * *   **5**: an ApsaraDB for Redis instance.
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * Specifies whether the asset has Cloud Security Posture Management (CSPM) risks. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  cspmStatus?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The server component that is exposed on the Internet.
   * 
   * @example
   * openssl
   */
  exposureComponent?: string;
  /**
   * @remarks
   * Expose component type.
   * 
   * @example
   * system_service
   */
  exposureComponentBizType?: string;
  /**
   * @remarks
   * The public IP address of the server or the public endpoint of the database.
   * 
   * @example
   * 116.12.XX.XX
   */
  exposureIp?: string;
  /**
   * @remarks
   * The port that is exposed on the Internet.
   * 
   * @example
   * 22
   */
  exposurePort?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of server groups.
   * 
   * @example
   * 9535356
   */
  groupId?: number;
  /**
   * @remarks
   * Specifies whether the asset has weak password risks. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * Unhealthy
   */
  healthStatus?: boolean;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * abc_centos7.2_005
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the ID.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether the asset has vulnerabilities. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  vulStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      cspmStatus: 'CspmStatus',
      currentPage: 'CurrentPage',
      exposureComponent: 'ExposureComponent',
      exposureComponentBizType: 'ExposureComponentBizType',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      groupId: 'GroupId',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageSize: 'PageSize',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      cspmStatus: 'boolean',
      currentPage: 'number',
      exposureComponent: 'string',
      exposureComponentBizType: 'string',
      exposureIp: 'string',
      exposurePort: 'string',
      groupId: 'number',
      healthStatus: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      pageSize: 'number',
      resourceDirectoryAccountId: 'number',
      vulStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

