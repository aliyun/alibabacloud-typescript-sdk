// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataLimitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auditing. Valid values:
   * 
   * - **0**: Disable auditing.
   * 
   * - **1**: Enable auditing.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a rescan when a rule is changed. Valid values:
   * 
   * - **0**: Do not automatically trigger a rescan.
   * 
   * - **1**: Automatically trigger a rescan.
   * 
   * > If a rescan is automatically triggered, a full scan is performed on the data asset.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MySQL**
   * 
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The unique ID of the data asset.
   * 
   * > Call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to query the ID of the data asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * - **zh**: Chinese (default)
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after auditing is enabled. Unit: days. Valid values:
   * 
   * - **30**
   * 
   * - **90**
   * 
   * - **180**
   * 
   * - **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Specifies whether to modify the username and password that are used to connect to the database. Valid values:
   * 
   * - **true**: Modify the username and password.
   * 
   * - **false**: Do not modify the username and password.
   * 
   * @example
   * true
   */
  modifyPassword?: boolean;
  /**
   * @remarks
   * The password for the ApsaraDB RDS database.
   * 
   * @example
   * ********
   */
  password?: string;
  /**
   * @remarks
   * The port used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The service to which the data asset belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADS
   * 
   * - **4**: OTS
   * 
   * - **5**: RDS
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The number of sensitive data samples to return. This parameter takes effect only after data detection is enabled. Valid values:
   * 
   * - **0**
   * 
   * - **5**
   * 
   * - **10**
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * The security groups for agent-based auditing that uses PrivateLink.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * The ID of the region in which the data asset is located. Valid values:
   * 
   * - **cn-beijing**: China (Beijing)
   * 
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * 
   * - **cn-huhehaote**: China (Hohhot)
   * 
   * - **cn-hangzhou**: China (Hangzhou)
   * 
   * - **cn-shanghai**: China (Shanghai)
   * 
   * - **cn-shenzhen**: China (Shenzhen)
   * 
   * - **cn-hongkong**: China (Hong Kong)
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The username for the ApsaraDB RDS database.
   * 
   * @example
   * User01
   */
  userName?: string;
  /**
   * @remarks
   * The vSwitches for agent-based auditing that uses PrivateLink.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the data asset belongs.
   * 
   * @example
   * vpc-2zevcqke6hh09c41****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoScan: 'AutoScan',
      engineType: 'EngineType',
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      logStoreDay: 'LogStoreDay',
      modifyPassword: 'ModifyPassword',
      password: 'Password',
      port: 'Port',
      resourceType: 'ResourceType',
      samplingSize: 'SamplingSize',
      securityGroupIdList: 'SecurityGroupIdList',
      serviceRegionId: 'ServiceRegionId',
      userName: 'UserName',
      vSwitchIdList: 'VSwitchIdList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      autoScan: 'number',
      engineType: 'string',
      featureType: 'number',
      id: 'number',
      lang: 'string',
      logStoreDay: 'number',
      modifyPassword: 'boolean',
      password: 'string',
      port: 'number',
      resourceType: 'number',
      samplingSize: 'number',
      securityGroupIdList: { 'type': 'array', 'itemType': 'string' },
      serviceRegionId: 'string',
      userName: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIdList)) {
      $dara.Model.validateArray(this.securityGroupIdList);
    }
    if(Array.isArray(this.vSwitchIdList)) {
      $dara.Model.validateArray(this.vSwitchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

