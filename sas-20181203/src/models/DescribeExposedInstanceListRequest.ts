// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * - **0**: ECS
   * 
   * - **3**: RDS
   * 
   * - **4**: MONGODB
   * 
   * - **5**: RDS-Redis.
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * Specifies whether the asset that you want to query has Cloud Security Posture Management (CSPM) risks. Valid values:
   * 
   * - **true**: The asset has CSPM risks.
   * - **false**: The asset does not have CSPM risks.
   * 
   * @example
   * true
   */
  cspmStatus?: boolean;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the system component exposed on the Internet that you want to query.
   * 
   * @example
   * openssl
   */
  exposureComponent?: string;
  /**
   * @remarks
   * The type of the exposed component.
   * 
   * @example
   * system_service
   */
  exposureComponentBizType?: string;
  /**
   * @remarks
   * The public IP address of the server type or the public network connection address of the database type that you want to query.
   * 
   * @example
   * 116.12.XX.XX
   */
  exposureIp?: string;
  /**
   * @remarks
   * The exposed port that you want to query.
   * 
   * @example
   * 22
   */
  exposurePort?: string;
  /**
   * @remarks
   * The ID of the server group that you want to query.
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query server group IDs.
   * 
   * @example
   * 9535356
   */
  groupId?: number;
  /**
   * @remarks
   * Specifies whether the asset that you want to query has baseline weak password risks. Valid values:
   * 
   * - **true**: The asset has baseline weak password risks.
   * - **false**: The asset does not have baseline weak password risks.
   * 
   * @example
   * true
   */
  healthStatus?: boolean;
  /**
   * @remarks
   * The instance ID of the asset that you want to query.
   * 
   * @example
   * i-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset that you want to query.
   * 
   * @example
   * abc_centos7.2_005
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether the asset that you want to query has vulnerabilities. Valid values:
   * - **true**: The asset has vulnerabilities.
   * - **false**: The asset does not have vulnerabilities.
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

