// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataLimitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auditing. Valid values:
   * - **0**: Disable auditing.
   * - **1**: Enable auditing.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether to automatically trigger a rescan when rules change. Valid values:
   * - **0**: Do not trigger an automatic scan.
   * - **1**: Trigger an automatic scan.  
   * 
   * > When a rule change triggers an automatic scan, a full scan is performed on all data in the data source.
   * 
   * @example
   * 1
   */
  autoScan?: number;
  /**
   * @remarks
   * The database type. Valid values:
   * - **MySQL**
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
   * The unique ID of the data asset that belongs to the product associated with the DSC connection authorization configuration item.
   * > To modify a DSC connection authorization configuration item, you must provide the unique ID of the data asset that belongs to the associated product. You can call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response messages. Valid values:
   * 
   * - **zh**: Chinese (default)
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The retention period of raw logs after auditing is enabled. Unit: days. Valid values:
   * - **30**
   * - **90**
   * - **180**
   * - **365**
   * 
   * @example
   * 30
   */
  logStoreDay?: number;
  /**
   * @remarks
   * Specifies whether to modify the username and password for connecting to the database. Valid values:
   * - **true**: Modify.
   * - **false**: Do not modify.
   * 
   * @example
   * true
   */
  modifyPassword?: boolean;
  /**
   * @remarks
   * The password used for the DSC connection authorization to the RDS database.
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
   * The name of the product to which the data of the DSC connection authorization configuration item belongs. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADS
   * - **4**: OTS
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
   * The number of sample entries for sensitive data detection after data detection is enabled. Valid values:
   * - **0**
   * - **5**
   * - **10**
   * 
   * @example
   * 0
   */
  samplingSize?: number;
  /**
   * @remarks
   * The security groups used by PrivateLink in agent-based auditing.
   */
  securityGroupIdList?: string[];
  /**
   * @remarks
   * The region where the asset resides. Valid values:
   * - **cn-beijing**: China (Beijing)
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * - **cn-huhehaote**: China (Hohhot)
   * - **cn-hangzhou**: China (Hangzhou)
   * - **cn-shanghai**: China (Shanghai)
   * - **cn-shenzhen**: China (Shenzhen)
   * - **cn-hongkong**: Hong Kong (China)
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The username used for the DSC connection authorization to the RDS database.
   * 
   * @example
   * User01
   */
  userName?: string;
  /**
   * @remarks
   * The vSwitches used by PrivateLink in agent-based auditing.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The VPC ID to which the data asset belongs.
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

