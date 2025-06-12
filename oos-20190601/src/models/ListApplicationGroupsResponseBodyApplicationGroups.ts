// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationGroupsResponseBodyApplicationGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 12345678
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createDate?: string;
  /**
   * @remarks
   * The configuration information of the application group.
   * 
   * @example
   * {   "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",   "Parameters": {     "ZoneId": "cn-hangzhou-k",     "ProjectName": "test",     "SystemDiskSize": 40,     "InstanceChargeType": "PostPaid",     "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",     "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",     "SystemDiskCategory": "cloud_essd",     "InstancePassword": "******",     "InternetChargeType": "PayByTraffic",     "InstanceCount": 1,     "InternetMaxBandwidthOut": 0,     "VpcId": "vpc-bp1i99boyas8i8m9t3skp",     "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",     "DataDiskSize": 100,     "EcsInstanceType": "ecs.s6-c1m4.small",     "DataDiskCategory": "cloud_efficiency",     "EnvironmentCommandId": "c-hz028fc3g031gcg"   },   "RegionId": "cn-hangzhou",   "StackName": "stack-1645688523068-3no_AKhOJ",   "DisableRollback": true }
   */
  deployParameters?: string;
  /**
   * @remarks
   * The ID of the region in which the related resources reside.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  errorDetail?: string;
  errorType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * UpdateMyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The state of the application group.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The state information of the application group.
   * 
   * @example
   * ApplicationGroup is Created.
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the application group was updated.
   * 
   * @example
   * 2021-09-08T03:01:53Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployParameters: 'DeployParameters',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      errorDetail: 'ErrorDetail',
      errorType: 'ErrorType',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      status: 'Status',
      statusReason: 'StatusReason',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployParameters: 'string',
      deployRegionId: 'string',
      description: 'string',
      errorDetail: 'string',
      errorType: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      status: 'string',
      statusReason: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

