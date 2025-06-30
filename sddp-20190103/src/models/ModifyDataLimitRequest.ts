// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataLimitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a re-scan after a rule is modified. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * > When a re-scan is triggered, DSC scans all data in your data asset.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The database engine that is run by the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
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
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The unique ID of the data asset for which you want to modify configuration items.
   * 
   * > You can call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to query the ID of the data asset.
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
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after you enable the security audit feature. Unit: days. Valid values:
   * 
   * *   **30**
   * *   **90**
   * *   **180**
   * *   **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Specifies whether to change the username and password that are used to log on to the ApsaraDB RDS database. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  modifyPassword?: boolean;
  /**
   * @remarks
   * The password used to log on to the ApsaraDB RDS database that you authorize DSC to access.
   * 
   * @example
   * ********
   */
  password?: string;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name of the service to which the data asset belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore
   * *   **5**: ApsaraDB RDS
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The number of sensitive data samples tht are collected after sensitive data detection is enabled. Valid values:
   * 
   * *   **0**
   * *   **5**
   * *   **10**
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * The security group that is used by PrivateLink when you install the DSC agent.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * The region in which the data asset resides. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-zhangjiakou**: China (Zhangjiakou)
   * *   **cn-huhehaote**: China (Hohhot)
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The username used to log on to the ApsaraDB RDS database that you authorize DSC to access.
   * 
   * @example
   * User01
   */
  userName?: string;
  /**
   * @remarks
   * The vSwitch that is used by PrivateLink when you install the DSC agent.
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

